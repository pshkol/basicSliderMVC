import { View } from './view';
import { Model } from './model';
import { Controller } from './controller';

const view = new View();
const model = new Model();
const controller = new Controller(view, model);