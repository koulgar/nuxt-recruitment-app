import HTTPStatus from '../constants/http-status-codes.constant';

export const parseLayoutErrorMessage = errorCode => {
  switch (errorCode) {
    case HTTPStatus.NOT_FOUND:
      return 'Aradığınız sayfaya ulaşılamadı.';
    case HTTPStatus.SERVER_ERROR:
    default:
      return 'Beklenmeyen bir hata oluştu.';
  }
};
