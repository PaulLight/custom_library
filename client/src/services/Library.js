import Api from '@/services/Api';

export default {
  getLibrary() {
    return Api().get('library');
  }
};
