export default {
  /**
   * 验证手机号
   * @params {string} phone
   */

  validatePhone(phone){
    const reg = /^1[3-9][0-9]{9}$/
    return reg.test(phone)
  }

}