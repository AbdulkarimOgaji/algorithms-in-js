function telephoneCheck(str) {
    var pattern = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if (pattern.test(str)) {
      return true;
    }
    return false;
  }
  
  telephoneCheck("555-555-5555");