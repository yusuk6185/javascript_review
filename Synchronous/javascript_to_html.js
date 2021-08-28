// COUNTER //
// index.html //
<body>
	<h2 id="number">0</h2>
	<div>
		<button id="increase">+1</button>
		<button id="decrease">-1</button>
	</div>
	<script src="src/index.js">
	</script>
</body>

// index.js//
const number = document.getElementById("number");
const buttons = document.querySelectorAll("button");
const [increase, decrease] = buttons;

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};

// MODAL //
// index.html //
<body>
    <h1>안녕하세요</h1>
    <p>내용내용내용</p>
    <button id="open">모달열기</button>
    <div class="modal-wrapper" style="display: none;">
      <div class="modal">
        <div class="modal-title">안녕하세요</div>
        <p>내용</p>
        <div class="close-wrapper">
          <button id="close">닫기</button>
        </div>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>

// index.js //
import "./styles.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};

// styles.css //
// body {
//     font-family: sans-serif;
//   }
  
//   .modal-wrapper {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .modal {
//     background: white;
//     padding: 24px, 16px;
//     border-radius: 4px;
//     width: 320px;
//   }
  
//   .modal-title {
//     font-size: 24px;
//     font-weight: bold;
//   }
  
//   .close-wrapper {
//     text-align: right;
//   }