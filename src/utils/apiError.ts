import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export const errorApi = (error: any): void => {
    console.log()
    if (!error.response) {
      Swal.fire( '', '일시적인 오류가 발생했습니다. 잠시 후에 다시 시도해주세요.', 'error' );
    } else {
      const { status } = error.response;
      if (status === 500) {
        Swal.fire( '', '일시적인 오류가 발생했습니다.(500)\n잠시 후에 다시 시도해주세요.', 'error' );
      }
    }
};