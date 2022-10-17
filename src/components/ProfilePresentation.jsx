import { YoutubeSearchedFor } from "@mui/icons-material";
import React from "react";

const ProfilePresentation = ({ user }) => {
  return (
    <section class="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words border border-t-0 bg-white w-full mb-6 shadow-xl rounded-lg">
          <div class="px-6">
            <div class="px-4 flex justify-center">
              <div class="relative">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                  class=" shadow-xl rounded-full h-auto align-middle border-none w-32 md:w-48"
                />
              </div>
            </div>
            <div class="text-center mt-4">
              <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                {user.displayName}
              </h3>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div class="mt-2 py-5 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <span class="text-lg font-bold leading-relaxed text-blueGray-700">
                    Возраст:
                  </span>
                  <span class="mb-4 "> 24</span>
                </div>
                <div class="w-full lg:w-9/12 px-4">
                  <span class="text-lg font-bold leading-relaxed text-blueGray-700">
                    Пол:
                  </span>
                  <span class="mb-4 "> Женщина</span>
                </div>
                <div class="w-full lg:w-9/12 px-4">
                  <span class="text-lg font-bold leading-relaxed text-blueGray-700">
                    Локация:
                  </span>
                  <span class="mb-4 "> Кишинев, Молдова</span>
                </div>
                <div class="w-full lg:w-9/12 px-4">
                  <span class="text-lg font-bold leading-relaxed text-blueGray-700">
                    Архетип:
                  </span>
                  <span class="mb-4 "> Депрессивная девочка</span>
                </div>
              </div>
            </div>
            <div class="my-4 text-blueGray-600 text-center">
              <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Моя цель заключается в том чтобы достичь успеха и избавиться от
              моей депрессии блин
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePresentation;
