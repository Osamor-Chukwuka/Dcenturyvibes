import { EnvelopeIcon } from '@heroicons/react/24/outline';


export default function Footer() {
    return (
        <footer className="bg-gray-800 px-4 py-12 text-white">
            <div className="mx-auto max-w-6xl text-center">
                <EnvelopeIcon className="mx-auto mb-6 w-12 h-12 text-purple-400" />
                <div className="mb-4 font-light text-xl">
                    Together, we can create a world free from violence
                </div>
                <div className="text-gray-400">
                    © 2025 Dcenturyvibes Global International Foundation. All rights reserved.
                </div>
            </div>
        </footer>
    )
}