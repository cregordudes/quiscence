import Link from "next/link";
import React from "react";

const Footer = () => {
   return (
      <div>
         <footer class="relative bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 pt-8 pb-6">
            <div class="container mx-auto px-4">
               <div class="flex flex-wrap text-left lg:text-left">
                  <div class="w-full lg:w-6/12 px-4">
                     <h4 class="text-3xl fonat-semibold text-blueGray-700">
                        Есть вопросы?
                     </h4>
                     <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                        Свяжитесь с нами и мы ответим Вам!
                     </h5>
                     <div class="mt-6 lg:mb-0 mb-6">
                        <span className="bg-white rounded-lg rounded-l-full py-2 pl-4 pr-8">
                           cregordudes@gmail.com
                        </span>

                        <button
                           className="py-2 px-4 bg-blue-500 text-white rounded-lg rounded-r-full -ml-5"
                           onClick={() =>
                              (window.location.href =
                                 "mailto:cregordudes@gmail.com")
                           }
                        >
                           send
                        </button>
                     </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                     <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                           <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                              Полезные ссылки
                           </span>
                           <ul class="list-unstyled">
                              <li>
                                 <Link
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="/about"
                                 >
                                    О нас
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="/tests"
                                 >
                                    Пройти тест
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="/goal"
                                 >
                                    Наша цель
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="/contacts"
                                 >
                                    Контакты
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                           <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                              Другие ресуры:
                           </span>
                           <ul class="list-unstyled">
                              <li>
                                 <a
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://www.mentalhealth.gov/basics/what-is-mental-health"
                                 >
                                    mentalhealthg.gov
                                 </a>
                              </li>
                              <li>
                                 <a
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://www.cdc.gov/mentalhealth/learn/index.htm"
                                 >
                                    cdc.gov
                                 </a>
                              </li>
                              <li>
                                 <a
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://creative-tim.com/privacy?ref=njs-profile"
                                 >
                                    creative-tim.com
                                 </a>
                              </li>
                              <li>
                                 <a
                                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://www.medicalnewstoday.com/articles/154543#types"
                                 >
                                    medicalnewstoday.com
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <hr class="my-6 border-blueGray-300" />
               <div class="flex flex-wrap items-center md:justify-between justify-center">
                  <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                     <div class="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="get-current-year">2022 </span>
                        <a
                           href="https://github.com/cregordudes/quiscence"
                           class="text-blueGray-500 hover:text-gray-800"
                           target="_blank"
                           rel="noreferrer"
                        >
                           cregordudes team.
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
