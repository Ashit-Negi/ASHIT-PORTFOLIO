class Contact {
  constructor(name, email, message, number) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.number = number;
  }

  validate() {
    if (!this.name || !this.email || !this.message || !this.number) {
      return { valid: false, error: "All fields are required" };
    }
    return { valid: true };
  }
}

module.exports = Contact;
