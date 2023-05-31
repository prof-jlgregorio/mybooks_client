import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de rota
import Home from '@/views/home/Home.vue'
import CategoryIndex from  '@/views/categories/index/CategoryIndex.vue'
import CategoryCreate from '@/views/categories/create/CategoryCreate.vue'
import CategoryUpdate from '@/views/categories/update/CategoryUpdate.vue'


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
    path: '/categories/create',
    name: 'categories-create',
    component: CategoryCreate
  },
  {
    path: '/categories/update/:id',
    name: 'categories-update',
    component: CategoryUpdate
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