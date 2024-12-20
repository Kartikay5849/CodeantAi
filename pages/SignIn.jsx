import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { FaGithub ,FaBitbucket,FaGitlab  } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";
import  Icon from "../src/assets/icon.svg"
const SignIn = () => {
    const [selectedTab, setSelectedTab] = useState("saas");
    const navigate = useNavigate();
    function SignInOption({ text,icon }) {
        return (
          <button   onClick={()=>navigate('/repositories')} className="bg-white border border-[#D8DAE5] hover:bg-gray-100 text-black py-2 px-8 rounded-md flex justify-center items-center gap-3">
            {icon}{text}
          </button>
        );
      }
      
  return (
    <div className="md:flex md:justify-between">
      {/* Left Section */}
      <div className="hidden md:flex relative border border-[#e6e6e8] h-screen w-screen items-center justify-start">
        <div>
          <div className="p-6 relative">
            <div className="bg-white shadow-2xl border border-[#f4f3f3] ml-12 rounded-2xl p-6 space-y-4">
              <h1 className="text-lg font-bold text-gray-800 flex items-center">
                <span className="mr-2">
                    <img src={Icon} alt="Codeant AI Icon" width="20" height="20" />
                </span>
                AI to Detect & Autofix Bad Code
              </h1>
              <div className="flex justify-between text-center">
                <div>
                  <p className="text-gray-700 text-sm font-medium">30+</p>
                  <p className="text-xs text-gray-500">Language Support</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-medium">10K+</p>
                  <p className="text-xs text-gray-500">Developers</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-medium">100K+</p>
                  <p className="text-xs text-gray-500">Hours Saved</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-2xl border border-[#f4f3f3] rounded-2xl p-6 mt-12 w-1/2 absolute md:-bottom-16 md:-right-16">
            <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="28.8333" cy="28.5885" rx="28" ry="28.3832" fill="#9D90FA" fillOpacity="0.25"/>
                    <path d="M38.4336 27.755H28.6555V17.843C28.6555 17.7211 28.5571 17.6213 28.4368 17.6213H27.7258C26.2911 17.6198 24.8701 17.9055 23.5445 18.462C22.219 19.0185 21.0148 19.8349 20.0012 20.8643C19.0033 21.8728 18.2083 23.0683 17.6606 24.3844C17.0918 25.7509 16.802 27.2006 16.802 28.6974C16.802 30.1941 17.0918 31.641 17.6606 33.0075C18.2102 34.3241 18.9977 35.5104 20.0012 36.5277C21.0047 37.5449 22.1723 38.3432 23.4739 38.9003C24.8196 39.4791 26.2668 39.776 27.7286 39.7735C29.1633 39.7749 30.5843 39.4892 31.9099 38.9327C33.2354 38.3762 34.4396 37.5598 35.4532 36.5305C36.4567 35.5132 37.2442 34.3297 37.7938 33.0103C38.3647 31.6462 38.6577 30.1792 38.6551 28.6974V27.9767C38.6524 27.8547 38.554 27.755 38.4336 27.755ZM40.8372 26.2166L40.7661 25.435C40.5336 22.8849 39.418 20.479 37.6188 18.6635C35.8213 16.8428 33.4525 15.7163 30.9223 15.4787L30.1485 15.4066C30.02 15.3955 29.9106 15.4953 29.9106 15.6256V26.261C29.9106 26.3829 30.009 26.4827 30.1293 26.4827L40.6184 26.455C40.7469 26.4522 40.8481 26.3441 40.8372 26.2166Z" fill="#9D90FA"/>
                </svg>

                </div>
                <div className="ml-4">
                <p className="text-gray-800 text-sm font-bold">Issues Fixed</p>
                <p className="text-lg font-bold">500K+</p>
                </div>
                
            </div>
            
            </div>
            
        </div>

      <div className="  w-32 h-32">
        <svg width="284" height="319" viewBox="0 0 284 319" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
            <path fillRule="evenodd" clipRule="evenodd" d="M188.801 1.63706C184.907 2.39455 178.849 4.12597 175.279 5.42453C171.709 6.72309 164.136 10.0777 158.511 12.8912C152.886 15.7048 143.149 21.4401 136.875 25.6604C130.601 29.8807 120.864 37.3475 115.239 42.4335C109.614 47.4113 101.825 55.0945 97.9301 59.5312C94.0356 63.8597 87.1121 72.625 82.3522 78.9014C77.7004 85.1778 70.5605 95.8909 66.5579 102.708C62.447 109.526 56.3889 120.996 52.9272 128.138C49.5736 135.281 44.5973 146.751 42.001 153.569C39.2965 160.386 35.9429 170.883 34.4283 176.835C32.3729 185.275 31.6157 191.443 31.1829 204.97C30.7502 216.332 31.0748 225.098 31.9402 230.4C32.6975 234.837 34.4283 241.654 35.7265 245.55C37.0247 249.446 39.5128 255.289 41.1355 258.536C42.7582 261.782 46.22 267.193 48.7081 270.439C51.1963 273.685 55.6317 278.339 58.5525 280.719C61.4734 283.1 67.5315 287.104 71.9669 289.593C76.4023 292.19 87.4366 297.168 96.3074 300.631C105.286 304.202 118.376 308.855 125.516 311.019C132.656 313.183 144.339 315.889 151.479 317.187C162.189 319.027 167.49 319.243 181.77 318.81C194.427 318.378 201.459 317.728 207.733 315.997C212.493 314.807 220.498 311.668 225.475 309.179C231.316 306.258 236.833 302.362 240.728 298.575C244.082 295.22 248.192 289.809 249.923 286.13C252.628 280.611 253.169 278.122 253.493 269.357C253.818 261.133 253.385 257.021 251.221 248.796C249.815 243.169 246.57 233.755 244.082 228.019C241.702 222.176 237.158 212.87 234.021 207.459C230.884 201.94 224.717 192.525 220.174 186.574C215.738 180.622 208.166 171.857 203.406 166.987C198.646 162.226 190.749 155.192 185.881 151.296C181.121 147.509 176.361 144.371 175.387 144.371C174.413 144.371 173.656 144.587 173.656 144.912C173.656 145.236 176.685 148.374 180.255 151.945C183.933 155.516 189.559 161.576 192.696 165.472C195.833 169.368 198.538 172.939 198.538 173.588C198.538 174.237 193.561 169.368 187.395 162.767C181.229 156.166 173.548 148.807 170.303 146.318C167.057 143.829 161.54 140.042 157.97 137.878C154.4 135.822 147.585 132.792 142.825 131.168C136.01 129.004 131.899 128.355 123.352 128.355C116.213 128.247 110.479 128.896 106.585 130.086C103.339 131.06 98.3628 133.333 95.5501 135.172L90.3575 138.419C88.6266 133.008 88.1939 129.653 88.1939 127.597C88.1939 125.541 89.1675 120.672 90.2493 116.776C91.4393 112.88 94.7929 106.063 97.8219 101.626C100.743 97.1895 106.476 89.9392 110.479 85.5024C114.59 81.1739 121.838 74.5729 126.598 71.0018C131.358 67.4308 139.471 62.453 144.772 59.8559C149.965 57.2587 158.403 53.7959 163.704 52.1727C172.25 49.5756 174.738 49.2509 190.965 49.2509C204.812 49.1427 210.762 49.5756 217.469 51.1988C222.229 52.2809 230.018 54.5534 234.778 56.2848C239.538 58.0162 245.812 61.2626 248.733 63.5351C251.762 65.6994 255.657 69.5951 257.388 72.084C259.227 74.5729 261.823 78.4686 263.229 80.741C264.528 83.0135 267.124 85.7188 268.855 86.801C270.694 87.7749 273.398 88.6406 274.913 88.6406C276.536 88.6406 278.916 87.342 280.863 85.3942C283.351 82.7971 284 81.1739 284 77.6028C284 74.4647 282.918 71.11 280.863 67.539C279.24 64.6172 274.697 59.3148 270.91 55.852C267.124 52.3891 260.309 47.736 255.873 45.4635C251.438 43.0828 244.622 40.2692 240.728 39.0789C236.833 37.8885 229.044 36.3736 223.419 35.6161C216.82 34.6421 208.815 34.4257 201.242 34.8586C194.643 35.2914 185.232 36.59 180.147 37.6721C175.063 38.8625 167.274 41.1349 162.838 42.6499C158.403 44.2731 151.587 47.1949 147.693 49.1427C143.799 51.0906 136.226 55.6355 130.925 59.2066C125.624 62.7776 117.078 69.4868 112.102 74.2482C107.125 78.9014 99.5528 87.342 95.3338 92.9691C91.0066 98.5962 85.3812 107.145 82.7849 111.906C78.674 119.157 77.8086 120.131 77.5922 117.858C77.3759 116.343 78.7822 110.5 80.6213 104.873C82.4604 99.2455 85.9221 90.9131 88.3021 86.4763C90.682 82.0396 95.2256 75.0057 98.471 70.7854C101.608 66.6733 107.775 59.8559 112.102 55.7437C116.537 51.5234 124.218 45.4635 129.302 42.2171C134.387 38.9707 142.5 34.4257 147.477 32.1532C152.345 29.8807 161.107 26.6343 166.841 24.9029C172.683 23.2797 180.796 21.2237 185.015 20.5744C189.234 19.8169 198.213 18.843 205.028 18.3019C214.657 17.5444 217.902 16.8951 219.416 15.3802C220.498 14.298 221.364 12.0255 221.364 10.1859C221.364 8.23807 220.39 6.07381 218.876 4.66703C217.469 3.36847 215.306 1.74527 213.899 1.09599C212.601 0.446711 207.949 -0.094356 203.622 0.0138573C199.403 0.0138573 192.696 0.771351 188.801 1.63706ZM110.695 160.602C107.775 161.468 103.88 163.849 101.933 165.797C99.6611 167.961 97.9302 171.207 97.0648 174.67C96.1994 177.808 95.983 181.92 96.4157 184.409C96.7403 186.79 98.1466 190.902 99.3366 193.608C100.635 196.313 104.313 201.182 107.666 204.537C111.453 208.433 116.645 212.112 122.271 214.926C127.031 217.306 134.603 220.661 139.039 222.176C143.474 223.799 155.158 227.587 165.002 230.617C177.226 234.404 184.907 236.135 189.126 236.244C194.751 236.352 195.725 236.027 198.105 233.43C199.62 231.59 200.701 228.993 200.701 227.154C200.701 225.422 199.944 222.068 198.971 219.903C198.105 217.631 195.184 212.87 192.696 209.298C190.1 205.727 181.77 196.421 174.089 188.522C165.543 179.756 157.213 172.506 152.561 169.476C148.342 166.879 142.068 163.632 138.498 162.226C134.712 160.819 128.653 159.629 123.893 159.412C118.593 159.087 114.049 159.52 110.587 160.602H110.695Z" fill="#818181"/>
            <path d="M26.5312 149.998C22.7449 154.651 17.8768 161.576 15.605 165.472C13.3332 169.368 10.196 175.861 8.57328 180.081C6.95058 184.301 4.78697 191.01 3.70517 195.231C2.62337 199.451 1.21703 207.892 0.567946 214.168C-0.189315 221.959 -0.189315 228.885 0.567946 236.352C1.21703 242.304 2.62337 250.852 3.81335 255.289C4.89515 259.726 7.16694 266.543 8.78964 270.439C10.5205 274.335 12.9005 279.313 14.3068 281.585C15.7132 283.749 18.634 287.645 20.7976 290.026C23.0694 292.515 27.8294 296.627 31.3993 299.116C34.9692 301.713 40.811 305.176 44.3809 307.015C47.9509 308.747 55.6317 311.777 61.3652 313.616C67.2069 315.456 74.6714 317.295 78.025 317.837C82.3522 318.378 84.2994 318.269 85.273 317.187C86.1385 316.249 86.2106 315.492 85.4894 314.915C84.8403 314.374 79.9722 311.668 74.6714 308.855C69.2624 306.041 61.3652 301.28 56.9298 298.142C52.4944 295.112 46.1118 289.917 42.8664 286.671C39.5128 283.425 34.7529 277.798 32.3729 274.227C29.8848 270.656 26.9639 265.786 25.7739 263.405C24.4758 261.025 22.5285 255.938 21.3385 252.043C20.1486 248.147 18.5259 240.68 17.8768 235.27C16.9032 227.803 16.795 222.825 17.7686 213.627C18.5259 207.134 20.0404 197.07 21.3385 191.443C22.5285 185.816 25.233 176.293 27.2885 170.342C29.3439 164.39 32.5893 156.599 34.3202 153.028C36.051 149.457 37.3492 145.561 37.1329 144.371C36.9165 143.18 36.051 142.098 34.9692 141.882C33.8874 141.665 30.8584 144.479 26.5312 149.998Z" fill="#818181"/>
            </g>
        </svg>

      </div>
        </div>        
        </div>
        
        <div className="h-screen flex justify-center w-screen bg-[#FAFAFA]">
         <div className="flex flex-col items-center justify-center">
           <div className="border-1 border-[#000000] shadow-md rounded px-8 pt-6 pb-8">
             <div className=" flex flex-col gap-3  m-12">
              <div className="flex justify-center items-center">
                <img src={Icon} alt="Codeant AI Icon" width="35" height="35" className="mr-4" />
                <h1 className="text-3xl">Codeant AI</h1>
              </div>
                <h2 className="text-2xl text-center mt-2">Welcome to CodeAnt AI</h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-6">
              <button
                className={`${
                  selectedTab === "saas"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } font-bold py-2 px-16 md:px-24 rounded-sm focus:outline-none focus:shadow-outline`}
                onClick={() => setSelectedTab("saas")}
              >
                SaaS
              </button>
              <button
                className={`${
                  selectedTab === "self-hosted"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } font-bold py-2 px-16 md:px-24 rounded-sm focus:outline-none focus:shadow-outline`}
                onClick={() => setSelectedTab("self-hosted")}
              >
                Self Hosted
              </button>
            </div>

            {/* Dynamic Content */}
            <div
              className="flex flex-col  gap-2"
              style={{ minHeight: "200px"  }} // Ensures consistent height
            >
              {selectedTab === "saas" ? (
                <>
                  <SignInOption icon={<FaGithub size={20}/>} text="Sign in with Github"  onClick={()=>navigate('/repositories')} />
                  <SignInOption icon={<FaBitbucket color="blue" size={20}/>} text="Sign in with Bitbucket"  onClick={()=>navigate('/repositories')}/>
                  <SignInOption icon={<VscAzureDevops color="blue" size={20}/>} text="Sign in with Azure DevOps"  onClick={()=>navigate('/repositories')}/>
                  <SignInOption icon={<FaGitlab color="orange"size={20}/>} text="Sign in with GitLab" onClick={()=>navigate('/repositories')} />
                </>
              ) : (
                <>
                  <SignInOption icon={<FaGitlab color="orange" size={20}/>} text="Self-Hosted GitLab" />
                  <SignInOption icon={<IoKeyOutline size={20}/>} text="Sign in with SSO" />
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-4 text-center text-gray-600">
            By signing up you agree to the{" "}
            <a href="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </a>
            .
          </footer>
        </div>
    </div>
  </div>
  )
};

export default SignIn
