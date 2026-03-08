let game = document.getElementById("game");

game.innerHTML += data
  .map((item) => {
    return `<div data-aos="zoom-in-down" class="relative border border-[#01ffe1] bg-[#0c1621]">
          <img
            class="w-full h-[180px] object-cover"
            src="${item.img}"
            alt=""
          />
          <div class="p-4">
            <h5 class="text-white font-bold mb-[14px]">
              ${item.title}
            </h5>
            <p
              class="text-[#01ffe1] font-bold text-2xl [text-shadow:0_0_20px_#01ffe1,0_0_60px_rgba(0,255,225,0.3)]"
            >
              ${item.price}
            </p>
          </div>
          <p
            class="absolute font-bold text-white top-2 left-2 px-2 bg-[#0c1621]"
          >
            ${item.category}
          </p>
        </div>`;
  })
  .join("");
