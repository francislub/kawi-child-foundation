import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

export default function Sponsor() {
    

  return (
    <div>
        <section className="join" id="joinSection">
                <div className="container">
                    <div className="joinTitle">
                        SPONSOR A CHILD 
                        {/* & <span>SAVE LIVES</span> */}
                    </div>
                    <p className="text-lg">
                    Kawi Child Foundation is a family-based, non-profit organization established in 2023 in Mbale, Uganda. 
                    Dedicated to improving the lives of underprivileged children.
                    </p>
                    <button className="joinNow rounded">
                    <Link href="/joinus">JOIN US </Link>
                    </button>
                    <button className="adoptBtn rounded">
                       <Link href="/sponsor">Sponsor A Child Now</Link>
                    </button>
                </div>
            </section>
    </div>
  )
}
