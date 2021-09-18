const BTN_CADASTRAR = document.getElementByID('btn-cadastrar');
const BTN_LISTAR = document.getElementByID('btn-listar');
const BTN_SECTION_CADASTRAR = document.getElementByID('btn-section_cadastrar');
const BTN_LISTAR = document.getElementByID('btn-listar');

BTN-LISTAR.addEventsListener( 'Click', function () {
  SECTION_CADASTRAR.style.display = 'nome';
  SECTION_LISTAR.style.display = ' block';
});

BTN-CADASTRAR.addEventsListener( 'Click', function () {
  SECTION_LISTAR.style.display = 'nome';
  SECTION_CADASTRAR.style.display = ' block';
});
