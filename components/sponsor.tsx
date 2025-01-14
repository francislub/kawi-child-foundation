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
                      Kawi Child Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
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
