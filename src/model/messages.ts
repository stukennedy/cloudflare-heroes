class Messages {
  messages: string[] = [];

  async getMessages(): Promise<string[]> {
    return this.messages;
  }

  async addMessage(message: string): Promise<string[]> {
    this.messages.push(message);
    return this.messages;
  }

  async clearMessages(): Promise<void> {
    this.messages = [];
  }
}
export default new Messages();
