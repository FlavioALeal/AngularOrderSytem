import { Dish } from './dish';

export const MOCK_DISHES: Dish[] = [
  { id: 1, name: 'steak', multiple: false, period: 'night'},
  { id: 2, name: 'potato', multiple: true, period: 'night'},
  { id: 3, name: 'wine', multiple: false, period: 'night'},
  { id: 4, name: 'cake', multiple: false, period: 'night'},

  { id: 1, name: 'eggs', multiple: false, period: 'morning'},
  { id: 2, name: 'toast', multiple: false, period: 'morning'},
  { id: 3, name: 'coffee', multiple: true, period: 'morning'},
]