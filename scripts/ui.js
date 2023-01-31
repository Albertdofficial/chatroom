// render chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear(){
    this.list.innerHTML = ''
  }
  render(data) {
    const date = data.created_at.toDate()
    const day_month_year = date.toDateString()
    const hour = date.getHours();
    const minutes = date.getMinutes()

    const html = `
        <li class="list-group-item">
            <span class="username">${data.username} </span>
            <span class="message">${data.message} </span>
            <div class="time">${day_month_year} - ${hour}:${minutes}</div>
        </li>`;

    this.list.innerHTML += html;
  }
}
