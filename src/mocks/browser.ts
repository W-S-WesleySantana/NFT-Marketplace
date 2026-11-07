import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// O worker do navegador precisa apenas dos handlers REST/HTTP normais
export const worker = setupWorker(...handlers);
