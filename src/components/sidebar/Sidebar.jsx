import image1 from "../../../public/Icons2.png"

export default function SideBar(){
    return(
        <>
        
            {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button> */}

            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-[600px] w-[150px] px-3 py-4 overflow-y-auto opacity-100 justify-items-center bg-capx-black">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        

                        </a>
                    </li>
                    {/* icon1 */}
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.72 0H1.28C0.572 0 0 0.572 0 1.28V30.72C0 31.428 0.572 32 1.28 32H30.72C31.428 32 32 31.428 32 30.72V1.28C32 0.572 31.428 0 30.72 0ZM16.044 16.244L8.364 22.684C8.156 22.86 7.84 22.712 7.84 22.44V19.932C7.84 19.84 7.884 19.748 7.956 19.688L12.348 16L7.956 12.312C7.91923 12.283 7.88965 12.2458 7.86953 12.2035C7.84941 12.1612 7.83931 12.1148 7.84 12.068V9.56C7.84 9.288 8.156 9.14 8.364 9.316L16.044 15.752C16.2 15.88 16.2 16.116 16.044 16.244ZM24.16 22.44C24.16 22.616 24.024 22.76 23.86 22.76H16.46C16.296 22.76 16.16 22.616 16.16 22.44V20.52C16.16 20.344 16.296 20.2 16.46 20.2H23.86C24.024 20.2 24.16 20.344 24.16 20.52V22.44Z" fill="white"/>
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.2 6.52632H22.4V4.89474C22.4 3.59657 21.8943 2.35158 20.9941 1.43364C20.0939 0.515694 18.873 0 17.6 0H14.4C13.127 0 11.9061 0.515694 11.0059 1.43364C10.1057 2.35158 9.6 3.59657 9.6 4.89474V6.52632H4.8C3.52696 6.52632 2.30606 7.04201 1.40589 7.95995C0.505713 8.87789 0 10.1229 0 11.4211V26.1053C0 27.4034 0.505713 28.6484 1.40589 29.5664C2.30606 30.4843 3.52696 31 4.8 31H27.2C28.473 31 29.6939 30.4843 30.5941 29.5664C31.4943 28.6484 32 27.4034 32 26.1053V11.4211C32 10.1229 31.4943 8.87789 30.5941 7.95995C29.6939 7.04201 28.473 6.52632 27.2 6.52632ZM12.8 4.89474C12.8 4.46201 12.9686 4.04702 13.2686 3.74104C13.5687 3.43506 13.9757 3.26316 14.4 3.26316H17.6C18.0243 3.26316 18.4313 3.43506 18.7314 3.74104C19.0314 4.04702 19.2 4.46201 19.2 4.89474V6.52632H12.8V4.89474ZM28.8 26.1053C28.8 26.538 28.6314 26.953 28.3314 27.259C28.0313 27.5649 27.6243 27.7368 27.2 27.7368H4.8C4.37565 27.7368 3.96869 27.5649 3.66863 27.259C3.36857 26.953 3.2 26.538 3.2 26.1053V17.1316C7.27402 18.7797 11.6171 19.6267 16 19.6279C20.3828 19.6251 24.7256 18.7782 28.8 17.1316V26.1053ZM28.8 13.5584C24.7654 15.3658 20.4067 16.2991 16 16.2991C11.5933 16.2991 7.23457 15.3658 3.2 13.5584V11.4211C3.2 10.9883 3.36857 10.5733 3.66863 10.2674C3.96869 9.96137 4.37565 9.78947 4.8 9.78947H27.2C27.6243 9.78947 28.0313 9.96137 28.3314 10.2674C28.6314 10.5733 28.8 10.9883 28.8 11.4211V13.5584Z" fill="#ECECEC"/>
                        </svg>

                        
                        </a>
                    </li>
                    {/* vector */}
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.1429 0V2.55556H31.6106L20.5714 13.5266L15.0519 8.04106C14.8108 7.80151 14.4838 7.66694 14.1429 7.66694C13.8019 7.66694 13.475 7.80151 13.2339 8.04106L0 21.1932L1.818 23L14.1429 10.7512L19.6624 16.2367C19.9035 16.4763 20.2305 16.6108 20.5714 16.6108C20.9124 16.6108 21.2393 16.4763 21.4804 16.2367L33.4286 4.36233V12.7778H36V0H23.1429Z" fill="#ECECEC"/>
                        </svg>

                        </a>
                    </li>
                    {/* vector1 */}
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6591 0.160363C19.3837 0.000377066 19.0571 -0.0419636 18.7511 0.042638C18.445 0.12724 18.1844 0.331868 18.0266 0.611589L18.0256 0.613758L13.7875 8.07634L13.2753 7.84965C12.0112 7.28438 10.5897 7.19785 9.26824 7.60572C7.94676 8.01359 6.81258 8.8889 6.07097 10.0732L6.0635 10.0852L6.05603 10.0982L6.05389 10.0971L0.505525 19.5121L0.50019 19.5197V19.5284H0.498056C0.00473963 20.4004 -0.128632 21.4355 0.127137 22.4072C0.382907 23.379 1.00698 24.2081 1.86274 24.7131C2.5224 25.1086 3.28718 25.2846 4.05008 25.2164L3.98819 25.3271L3.98713 25.3281C3.7674 25.714 3.63407 26.1443 3.59661 26.5885L3.19115 30.3231V30.3318C3.12393 31.2136 4.09596 31.77 4.80338 31.2754L4.81405 31.2689L7.75042 29.0106C8.05558 28.7915 8.32126 28.5117 8.52399 28.1928V28.2036C8.52406 29.0038 8.77286 29.7835 9.23483 30.4314C9.69681 31.0792 10.3483 31.5622 11.0964 31.8112C11.8445 32.0601 12.6508 32.0625 13.4002 31.8178C14.1497 31.5732 14.8039 31.0941 15.2695 30.4489C15.405 30.5791 15.5491 30.7027 15.7017 30.8177C16.8113 31.6507 18.2614 32 19.7381 32H29.5971C30.1848 32 30.7519 31.7799 31.1901 31.3817C31.6282 30.9835 31.9067 30.4352 31.9723 29.8415H31.9979V27.7242H32V18.114C31.9997 17.5171 31.8273 16.9334 31.5042 16.4351C31.181 15.9368 30.7213 15.5456 30.1818 15.3101L18.7117 10.249L22.6435 3.32111L22.6457 3.31786C22.803 3.0379 22.8447 2.70588 22.7615 2.39473C22.6782 2.08357 22.4769 1.81871 22.2018 1.6583L22.1986 1.65722L19.6645 0.162532L19.6591 0.160363ZM12.7151 9.9626L9.88121 14.9521C9.32096 15.2267 8.85696 15.6692 8.55173 16.2201L5.12881 22.2422C4.98674 22.4909 4.78322 22.6974 4.53841 22.8415C4.29361 22.9855 4.01603 23.062 3.73318 23.0633C3.45488 23.0648 3.18134 22.9899 2.94147 22.8464L2.9372 22.8442C2.7526 22.7383 2.59053 22.5962 2.46041 22.426C2.33029 22.2559 2.23471 22.0612 2.17922 21.8532C2.12373 21.6453 2.10944 21.4281 2.13717 21.2145C2.1649 21.0009 2.2341 20.7949 2.34075 20.6087L7.86779 11.2306C8.33623 10.4837 9.0523 9.93207 9.88631 9.67559C10.7203 9.41911 11.6171 9.47475 12.4142 9.83244H12.4185L12.7151 9.9626ZM15.0337 16.731L17.6404 12.1374L29.3357 17.3004L29.3325 17.2961C29.4909 17.3634 29.6261 17.4769 29.721 17.6223C29.816 17.7677 29.8664 17.9384 29.866 18.1129V18.9741H29.8639V27.6732H23.6646C23.3926 27.6732 23.1269 27.6515 22.8665 27.6125L22.1805 27.4595C21.1432 27.155 20.2346 26.5091 19.5973 25.6232C18.7437 24.4365 17.1752 24.1372 15.9545 24.8259L15.9535 24.827C15.2172 25.2446 14.3466 25.7382 13.6616 26.1286L12.474 26.8011L12.4623 26.8087C11.9713 27.0958 11.3883 27.1732 10.8412 27.0239C10.2942 26.8747 9.82769 26.511 9.54403 26.0126C9.26213 25.5131 9.18649 24.9204 9.33369 24.3643C9.48089 23.8083 9.83893 23.3342 10.3293 23.046L14.8374 20.3994C15.0307 20.3299 15.2002 20.2053 15.3257 20.0404C15.4511 19.8756 15.5272 19.6775 15.5448 19.4698C15.6539 18.5249 15.4755 17.5697 15.0337 16.731ZM4.82578 26.0364L7.58397 27.67C7.4584 27.848 7.30441 28.0035 7.12836 28.1299L7.12089 28.1353L5.50439 29.3783L4.43633 28.746L4.65827 26.7024V26.6905C4.67961 26.4584 4.73616 26.2371 4.82578 26.0364ZM19.6175 6.48295L16.8433 4.86461L17.8847 3.02934L20.6536 4.65635L19.6175 6.48295Z" fill="#ECECEC"/>
                        </svg>

                        </a>
                    </li>
                    <li>
                        {/* icon5 */}
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4737 23.8947V11.2631L20.9474 5.34229M15.0526 5.34229L4.52631 11.2631V23.8947M7.05262 27.8425L18 34L24.7368 30.2105L28.9474 27.8417M18 12.9473L20.5263 14.421L23.0526 15.8947V21.7894L20.5263 23.2631L18 24.7368L15.4737 23.2631L12.9474 21.7894V15.8947L15.4737 14.421L18 12.9473ZM18 12.9473V7.0526M23.0526 21.3684L28.9474 24.7368M12.9474 21.3684L7.05262 24.7368" stroke="#ECECEC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 7.05263C19.3953 7.05263 20.5263 5.92156 20.5263 4.52632C20.5263 3.13107 19.3953 2 18 2C16.6048 2 15.4737 3.13107 15.4737 4.52632C15.4737 5.92156 16.6048 7.05263 18 7.05263Z" stroke="#ECECEC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.52632 28.9473C5.92156 28.9473 7.05263 27.8163 7.05263 26.421C7.05263 25.0258 5.92156 23.8947 4.52632 23.8947C3.13107 23.8947 2 25.0258 2 26.421C2 27.8163 3.13107 28.9473 4.52632 28.9473Z" stroke="#ECECEC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.4737 28.9473C32.8689 28.9473 34 27.8163 34 26.421C34 25.0258 32.8689 23.8947 31.4737 23.8947C30.0784 23.8947 28.9474 25.0258 28.9474 26.421C28.9474 27.8163 30.0784 28.9473 31.4737 28.9473Z" stroke="#ECECEC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </a>
                    </li>
                    <li>
                        {/* ICON4 */}
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7275 16.3584L0.00126657 3.64104L3.63405 0.00571225L19.9956 16.3558L3.64547 32.7173L0.0101518 29.082L12.7275 16.3558L12.7275 16.3584Z" fill="#ECECEC"/>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
            </aside>

            
   


        </>
    )
        
    
}