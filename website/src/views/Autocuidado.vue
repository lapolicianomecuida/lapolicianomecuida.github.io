<template lang="pug">
  b-container#Autocuidado
    b-row.justify-content-center.mt-5
      b-col(cols="11").text-left.mb-5
        h1.text-center.handfont.mt-3.mb-5 Autocuidado en marchas feministas

        p Al hablar de cuidados para la seguridad de colectivos, mujeres y periodistas en una manifestación sabemos que una lista de cosas que hacer o no hacer no resuelve los problemas de seguridad que hay en el país. Por esto, es clave reflexionar cómo incorporar hábitos en las manifestaciones feministas, cómo llevarlos a cabo de forma individual y colectiva y cómo hacerlo, sin que esto requiera ser especialistas inmediatas en seguridad.

        p Te sugerimos una serie de recursos de organizaciones especializadas en el cuidado de la seguridad durante las marchas.

        p.bolder.text-center.mt-5.mb-4 Nunca olvides que la protesta social y  la documentación de la misma son un derecho.

        .ml-3.mx-2.mx-md-5.mt-5
          .d-flex.ml-3.my-3.align-items-center(v-for="(source, index) in sources" :key="index")
            img.bullet(:src="require('@/assets/star.png')")
            a.default-text.ml-2(:href="source.url" target="_blank") {{source.label}}
</template>
<script>
export default {
  name: 'Autocuidado',
  data() {
    return {
      sources: [
        {
          label: 'Seguridad en Marchas',
          url: 'https://efd.uy/seguridad-marchas/',
        },
        {
          label: 'Recomendaciones de seguridad para antes, durante y después de una manifestación',
          url: 'https://infoactivismo.org/recomendaciones-de-seguridad-para-antes-durante-y/',
        },
        {
          label: '¿Cuáles son tus derechos frente a una detención?',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2018/06/Cua%CC%81les-son-tus-derechos-frente-a-una-detencio%CC%81n.png',
        },
        {
          label: '¿Qué hacer frente a una detención arbitraria?',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2018/06/Que%CC%81-hacer-durante-una-detencio%CC%81n-arbitraria.png',
        },
        {
          label: 'Tus derechos en caso de detención al cubrir una marcha, protesta o disturbio social.',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2020/12/Tus-derechos-en-caso-de-detencio%CC%81n-al-cubrir-una-marcha-protesta-o-disturbio-social.png',
        },
        {
          label: 'Medidas preventivas para participar y cubrir protestas',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2020/12/Medidas-preventivas-para-particiar-y-cubrir-protestas.png',
        },
        {
          label: '¿Qué hacer en caso de malas prácticas policiales?',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2020/09/Que-hacer-en-caso-de-malas-pra%CC%81cticas-policiales.png',
        },
        {
          label: 'Consejos para la cobertura de protestas feministas.',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2020/03/Consejos-para-la-cobertura-de-protestas-feministas.png',
        },
        {
          label: '¿Qué hacer durante protestas y operativos policiales?',
          url: 'https://informaterompeelmiedo.mx/wp-content/uploads/2018/06/Que%CC%81-hacer-durante-protestas-y-operativos-policiales.png',
        },
      ],
    };
  },
};
</script>
