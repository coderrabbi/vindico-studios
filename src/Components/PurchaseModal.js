import React from "react";

const PurchaseModal = ({ cancle, handleBuy }) => {
  return (
    <div className="fixed   top-[50%] left-[50%] for-transform   z-[20]">
      <div>
        <main id="content" role="main" class="w-full max-w-md mx-auto p-6">
          <div class="mt-7 bg-white  rounded-xl shadow-lg border-gray-700">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block font-Revamped text-2xl  text-black  ">
                  Your text here
                </h1>
                <p class="mt-2 text-sm  font-IbmMono lowercase text-lightWhite">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Harum maxime asperiores dolores libero tempore, facere dolore
                  hic maiores. Odio, ut.
                </p>
              </div>

              <div class="mt-5">
                <form>
                  <div class="grid gap-y-4">
                    <div>
                      <div class="relative">
                        <input
                          type="text"
                          class="py-3 px-4 font-IbmMono block w-full border-2 border-black rounded-md text-smfocus:ring-blue-500 shadow-sm"
                          required
                          aria-describedby="email-error"
                        />
                      </div>
                      <p
                        class="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <div class="flex gap-4">
                      <button
                        onClick={handleBuy}
                        className="cursor-pointer gradient border-2 border-[#FFF0F080] w-[146px] h-[35px] rounded-full uppercase font-Revamped text-white"
                      >
                        Buy
                      </button>
                      <button
                        onClick={cancle}
                        className="cursor-pointer gradient border-2 border-[#FFF0F080] w-[146px] h-[35px] rounded-full uppercase font-Revamped text-white"
                      >
                        cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <button>close</button>
      </div>
    </div>
  );
};

export default PurchaseModal;
