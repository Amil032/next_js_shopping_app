import { instance } from '../axios';

export const fileUploader = (data: any) => {
  instance.post('api/admin/upload', data);
};
