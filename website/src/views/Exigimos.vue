<template lang="pug">
  b-container#exigimos
    b-row.justify-content-center.mt-5
      b-col(cols="11" md="10").text-left.my-3
        h1.text-center.handfont.mb-1.mt-3 “Cuando una manifestación o protesta conduce a situaciones de violencia debe entenderse que el Estado no fue capaz de garantizar el ejercicio de este derecho”.
        .d-flex.justify-content-center.mb-5.pb-5
          a.default-text.text-center.smaller(href="https://www.oas.org/es/cidh/expresion/publicaciones/ProtestayDerechosHumanos.pdf" target="_blank") (Comisión Interamericana de Derechos Humanos)

        p En México nos están matando. Las distintas manifestaciones de violencia de género en el país son el reflejo y resultado de las altas tasas de feminicidios, desapariciones forzadas y violencia física y digital en contra de las mujeres por el simple hecho de ser mujeres.

        p Ante esto, las manifestaciones de mujeres son de los pocos mecanismos con los que contamos para exigir seguridad y justicia.

        p Sin embargo, diferentes ciudades del país han sido escenario de acciones de represión, dispersión y limitación del ejercicio de estos derechos en el espacio público.

        .mx-2.mx-md-5.my-5
          .d-flex.ml-3.my-3
            img.bullet.mt-1.mr-2(:src="require('@/assets/star.png')")
            p Exigimos a los Estados promover
              span.bold un entorno seguro y propicio&nbsp;
              | para que las mujeres podamos ejercer nuestros derechos a la libertad de reunión, de   expresión y de asociación.
          .d-flex.ml-3.my-3
            img.bullet.mt-1.mr-2(:src="require('@/assets/star.png')")
            p Las instituciones de Seguridad y Justicia tienen el deber de
              span.bold diseñar y seguir los protocolos y guías&nbsp;
              | de actuación policial durante las manifestaciones, haciendo uso racional de la fuerza.  Además, las autoridades de procuración de justicia deben de asegurarse que
              span.bol cualquier tipo de detención&nbsp;
              | se realice de forma lícita.
          .d-flex.ml-3.my-3
            img.bullet.mt-1.mr-2(:src="require('@/assets/star.png')")
            p Es necesaria la
              span.bold protección de la vida, la integridad física, la dignidad&nbsp;
              | y otros derechos de los y las policías encargadas de intervenir en los operativos durante   las protestas sociales. Esto requiere una
              span.bold capacitación acorde&nbsp;
              | a la complejidad de las tareas que deben realizar durante las manifestaciones.
          .d-flex.ml-3.my-3
            img.bullet.mt-1.mr-2(:src="require('@/assets/star.png')")
            p Las autoridades deben prever y disponer de las distintas instancias de
              span.bold diálogo e intercambio con las manifestantes&nbsp;
              | antes y durante el desarrollo de la protesta.
          .d-flex.ml-3.my-3
            img.bullet.mt-1.mr-2(:src="require('@/assets/star.png')")
            p Exigimos la
              span.bold máxima restricción de armas de fuego&nbsp;
              | por parte de policías en protestas feministas. El uso de armas de fuego en contexto de  protestas sociales nunca se encuentra justificado por el criterio de proporcionalidad.

</template>
<script>
export default {
  name: 'Exigimos',
};
</script>
