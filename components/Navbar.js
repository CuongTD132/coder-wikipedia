import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">
                    Coder Wikimedia
                </Link>
            </div>
            <div>
                <Link href="/about">
                    About
                </Link>
                <Link href="/coders">
                    All Coders
                </Link>
            </div>

        </nav>
    );
}
