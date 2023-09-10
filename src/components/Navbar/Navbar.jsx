export default function Navbar() {
    return (
      <>
        <div className="navbar fixed top-0 right-0 w-auto left-[150px] bg-base-100 flex flex-row h-[110px] justify-items-center bg-capx-black">
          <ul className="flex flex-row justify-between w-1/2 ">
            <li className="mr-10 hover:underline decoration-capx-green decoration-3">Bounties</li>
            <li className="mr-10 hover:underline decoration-capx-green decoration-3">Quest</li>
            <li className="mr-10 hover:underline decoration-capx-green decoration-3">Opportunities</li>
            <li className="mr-10 hover:underline decoration-capx-green decoration-3">Reach Out</li>
          </ul>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </>
    )
  }