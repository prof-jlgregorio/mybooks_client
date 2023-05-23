import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de rota
import Home from '@/views/home/Home.vue'
import CategoryIndex from '@/views/categories/index/CategoryIndex.vue'
import BookIndex from '@/views/books/index/BookIndex.vue'
import AuthorIndex from '@/views/authors/index/AuthorIndex.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryIndex
  },
  {
    path: '/books',
    name: 'books',
    component: BookIndex
  },
  {
    path: '/authors',
    name: 'authors',
    component: AuthorIndex
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;