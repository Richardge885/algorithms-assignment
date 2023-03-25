class User {
  /**
   * @param {string} info Information needs to be encrypted
   */
  encryptInfo(info) {
    const encryptedInfo = window.btoa(info);
    return encryptedInfo;
  }
}

export { User };
