import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col  h-full">
      <div className="bg-[#141517] border border-b-gray-700 h-10">
      </div>
      <div className="flex justify-center">
        <div className="w-[70%] flex flex-col gap-[20px] ">

          {/* 1.this is the breadcrumb navigation : Account / Emails / juliann */}
          <section className="">
            <div className='text-[#9b9da3] text-[14px] p-2.5'>
              Account / Emails & Calendar / <span className="text-white">julian@attio.com</span>
            </div>
          </section>

          {/* 2.this is teh account overview pannel : julian @ / in Sync */}
          <section className="flex flex-col gap-[10px]">

            <div className="flex lg:flex-row flex-col gap-[10px] justify-between">

              <div className="flex items-center gap-[10px]">
                <div className="bg-white p-2 rounded-xl">
                  <FcGoogle />
                </div>
                <div className="text-white text-[24px]">
                  julian@attio.com
                </div>
              </div>

              <div className=" w-fit flex items-center  border-1 border-[#1f1f1f] gap-[10px]  rounded-2xl bg-[#313236] py-2 px-4">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="text-white">
                  In Sync
                </div>
              </div>

            </div>

            <div className="text-[#9b9da3]">
              Update your inbox permissions and settings. <a href="#" className="text-blue-600 underline underline-offset-4"> Learn More.</a>
            </div>

          </section>

          {/* 3.this is the tabs section : General / Blocklist */}
          <section className="flex gap-[20px] border-b border-b-[#2d2f33] pb-2 ">
            <div className="flex gap-[10px] items-center text-[#919499]">
              <div> <IoSettingsOutline /></div>
              <div> General </div>
            </div>

            <div className="flex gap-[10px] items-center text-[#919499]">
              <div> <MdOutlinePersonRemoveAlt1 /> </div>
              <div> Blocklist </div>
            </div>
          </section>

          {/* 4.this is the Default Sharing Configuration Section*/}
          <section className="flex flex-col gap-[10px]">

            <div className="text-[24px] text-white"> Default Sharing Configuration</div>

            <div className="flex flex-col gap-[10px] border-b border-b-[#2d2f33] pb-10">
              {/* metadata only*/}
              <button className="border border-[#2a2c30] flex justify-between items-center p-2 rounded-xl">

                <div className="flex gap-[10px] items-center">
                  <div>
                    <img alt="Metadata Only" src="/MetadataOnly.png" className="rounded-xl" />
                  </div>

                  <div className="text-white text-left">
                    <div> Metadata Only</div>
                    <div className="text-[#919499]"> Only subject lines will be visible to anyone on your workspace</div>
                  </div>
                </div>

                <div className="w-4 h-4 border border-[#2a2c30] rounded-full"></div>
              </button>

              {/* subject line and metadata*/}
              <button className="border border-[#2a2c30] flex justify-between items-center p-2 rounded-xl">
                <div className="flex gap-[10px] items-center">
                  <div>
                    <img alt="Subject Line and Metadata" src="/subjectlineandmetadata.png" className="rounded-xl" />
                  </div>

                  <div className="text-white text-left">
                    <div> Subject Line and Metadata</div>
                    <div className="text-[#919499]"> We'll share the subject, participants and timestamp with anyone in your workspace</div>
                  </div>
                </div>

                <div className="w-4 h-4 border border-[#2a2c30] rounded-full"></div>
              </button>

              {/* full accesss*/}

              <button className="border border-[#2a2c30] flex justify-between items-center p-2 rounded-xl">
                <div className="flex gap-[10px] items-center">
                  <div>
                    <img alt="Full Access" src="/FullAccess.png" className="rounded-xl" />
                  </div>

                  <div className="text-white text-left">
                    <div className="flex gap-[10px] items-center">
                      <div>Full Access</div>
                      <div className="text-white bg-[#574204] border border-[#705601] px-1 rounded-md">Plus </div>
                    </div>
                    <div className="text-[#919499]"> Everything is shared with your workspace members (including the body, subject line and attachments)</div>
                  </div>
                </div>

                <div className="w-4 h-4 border border-[#2a2c30] rounded-full"></div>
              </button>
            </div>

          </section>

          {/* 5.this is the Individual inbox sharing */}
          <section className="flex flex-col gap-[30px]">

            <div className="flex flex-col gap-[10px]">
              <div className="text-[24px] text-white"> Individual inbox sharing</div>

              <div className="flex lg:flex-row flex-col  w-full lg:items-center items-start gap-[15px]">
                <div className="lg:w-[85%] w-full">
                  <input className="bg-transparent p-2 rounded-lg appearance-none w-full border border border-[#2d2f33]" />
                </div>


                <button className="bg-[#3f7ef2]  text-white flex items-center justify-center gap-[5px] p-2 rounded-lg  lg:w-[15%]">
                  <div className="flex items-center gap-[3px]">
                    <div>
                      <AiOutlineUserAdd />
                    </div>
                    <div>
                      Share access
                    </div>
                  </div>
                </button>


              </div>
            </div>

            <div>
              <div className="text-[#9a9ca1] flex justify-between border-b border-[#2d2f33] p-2">
                <div>User </div>
                <div>Access  </div>
              </div>
                {/* Users with different Permissions*/}
              <div>
                  {/* User 1 */}
                <div className="py-4 flex justify-between border-b border-[#2d2f33] gap-[10px]">
                  <div className="flex gap-[10px] items-center ">
                    <div className="text-white bg-[#9364fa] rounded-full px-2 py-0.5"> N</div>
                    <div className="text-white text-center">Nick Sharp </div>
                    <div className="text-[#919499]">nick@attio.com</div>
                  </div>

                  <div>

                    <div className="text-[#aaadb3] text-center"> Full Access</div>

                  </div>
                </div>

                 {/* User 2 */}
                 <div className="py-4 flex justify-between border-b border-[#2d2f33] gap-[10px]">
                  <div className="flex gap-[10px] items-center ">
                    <div className="text-white bg-[#f5b800] rounded-full px-2 py-0.5"> A</div>
                    <div className="text-white text-center">Alex Christie </div>
                    <div className="text-[#919499]">alex@attio.com</div>
                  </div>

                  <div>

                    <div className="text-[#aaadb3] text-center"> Metadata only</div>

                  </div>
                </div>

              </div>
            </div>



          </section>

        </div>
      </div>
    </div>
  );
}
