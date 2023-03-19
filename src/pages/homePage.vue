<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <CardElement :name="`${item.lvl} lvl`" :title="item.title">
        <template v-slot:body>
          <img :src="item.img">
          <h1 class="title">{{ item.desc }}</h1>
        </template>  
      </CardElement>
    </div>
  </div>
  
  
  <!-- <h1 class="title">В этом приложении:</h1>
  <ul>
    <li>Полная настройка шаблона на Vue CLI</li>
    <li>Установка и настройка Vue-router для Vue.js 3</li>
    <li>Динамическая перерисовка без перезагрузки страницы</li>
    <li>Динамичный навбар и ссылки</li>
    <li>Обработка несуществующих роутов</li>
    <li>Хеши и моды для роутера</li>
    <li>Настройка общего конфига</li>
  </ul>
</template>
  </ul> -->
</template>


<script>
import CardElement from '@/components/UI/CardElement.vue';

export default {
  components: {
    CardElement,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'archer',
          desc: 'The best warrior from Iberia',
          img: require('@/assets/img/archer.png'),
          lvl: 4
        },
        {
          id: 2,
          title: 'wizard',
          desc: 'Magic is an absolute power',
          img: require('@/assets/img/wizard.png'),
          lvl: 5
        }
      ]
    }
  }
}
</script>
