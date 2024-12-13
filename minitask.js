// Membuat elemen baru
const newElement = document.createElement("p");
newElement.innerHTML = "Ini adalah saya";
document.body.appendChild(newElement);

// Mengubah konten teks menggunakan textContent
newElement.textContent = "saya adalah ini";

// Mengubah style
newElement.style.color = "blue";
newElement.style.fontSize = "20px";
newElement.style.fontWeight = "bold";

// Membuat elemen ul
const list = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i}`;
  list.appendChild(listItem);
}
document.body.appendChild(list);

// Membuat elemen div kosong
const container = document.createElement("div");
const heading = document.createElement("h2");
heading.textContent = "Judul dalam div";
const paragraph = document.createElement("p");
paragraph.textContent = "Ini adalah paragraf dalam div.";
const button = document.createElement("button");
button.textContent = "Klik Saya";

container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(button);
document.body.appendChild(container);

// Menghapus semua konten dalam div dan ini harus di commend kalau mau menampilkan bagian yang ada button nya yang di atasnya
container.innerHTML = "";
container.insertAdjacentHTML(
  "afterbegin",
  `
  <h3>contoh</h3>
  <p>Iki bapake budi. ini bapak de budi taye</p>
  <ul>
    <li>budi 1</li>
    <li>budi 3</li>
    <li>budi 2</li>
  </ul>
`
);
