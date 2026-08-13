/* Автошкола «Вымпел» — поведение лендинга «Маршрут». seed 6f135856 */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* ---- nav gets its hairline only once the page has moved ---- */
  var nav = document.querySelector('[data-nav]');

  /* ---- the one authored moment: the road fills as you drive it ---- */
  var road = document.querySelector('[data-road]');
  var fill = document.querySelector('[data-road-fill]');
  var stops = Array.prototype.slice.call(document.querySelectorAll('[data-stop]'));
  var ticking = false;

  function paint() {
    ticking = false;

    if (nav) {
      if (window.scrollY > 8) nav.setAttribute('data-stuck', '');
      else nav.removeAttribute('data-stuck');
    }

    if (!road || !fill) return;

    var box = road.getBoundingClientRect();
    // The driver's eye line sits just below the middle of the viewport.
    var eye = window.innerHeight * 0.58;
    var travelled = eye - box.top;
    var pct = Math.max(0, Math.min(1, travelled / box.height));
    // The chevron tile is 40x30 in the source SVG and is drawn at the rail's width,
    // so snapping to whole tiles keeps the driven edge on a finished shape.
    var tile = road.querySelector('.road__track').getBoundingClientRect().width * 0.75;
    var travelledPx = pct * box.height;
    fill.style.height = (tile > 0 ? Math.floor(travelledPx / tile) * tile : travelledPx) + 'px';

    for (var i = 0; i < stops.length; i++) {
      var marker = stops[i].querySelector('.stop__marker');
      if (!marker) continue;
      if (marker.getBoundingClientRect().top <= eye) stops[i].setAttribute('data-reached', '');
      else stops[i].removeAttribute('data-reached');
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(paint);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  paint();

  /* ---- sections arrive rather than pop ---- */
  var revealables = document.querySelectorAll('[data-stop]');
  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.setAttribute('data-seen', ''); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-seen', '');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    Array.prototype.forEach.call(revealables, function (el) { io.observe(el); });
  }

  /* ---- form: name the problem and the way out ---- */
  var form = document.querySelector('[data-form]');
  if (!form) return;

  var done = form.querySelector('[data-done]');
  var submit = form.querySelector('[data-submit]');

  function digits(value) { return (value.match(/\d/g) || []).length; }

  function check(input) {
    var value = input.value.trim();
    if (input.name === 'name') {
      if (!value) return 'Напиши, как к тебе обращаться.';
      if (value.length < 2) return 'Слишком коротко: нужно хотя бы две буквы.';
      return '';
    }
    if (!value) return 'Без телефона мы не сможем перезвонить.';
    if (digits(value) < 10) return 'Не хватает цифр: нужен номер из 10 или 11 цифр.';
    return '';
  }

  function show(input, message) {
    var slot = form.querySelector('[data-error-for="' + input.id + '"]');
    if (!slot) return;
    if (message) {
      slot.textContent = message;
      slot.hidden = false;
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', slot.getAttribute('data-error-for') + '-error');
      slot.id = input.id + '-error';
    } else {
      slot.hidden = true;
      slot.textContent = '';
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }
  }

  var inputs = Array.prototype.slice.call(form.querySelectorAll('input'));
  inputs.forEach(function (input) {
    input.addEventListener('blur', function () { show(input, check(input)); });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid')) show(input, check(input));
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var firstBad = null;
    inputs.forEach(function (input) {
      var message = check(input);
      show(input, message);
      if (message && !firstBad) firstBad = input;
    });

    if (firstBad) { firstBad.focus(); return; }

    // Staging build: no endpoint is wired up yet. The success state is shown so the
    // flow can be reviewed end to end; the real handler lands with production.
    submit.disabled = true;
    submit.textContent = 'Отправляем…';

    window.setTimeout(function () {
      submit.disabled = false;
      submit.textContent = 'Записаться на обучение';
      if (done) done.hidden = false;
      form.reset();
    }, 700);
  });
})();
