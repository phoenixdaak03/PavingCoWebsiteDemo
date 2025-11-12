export function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-200 text-sm py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} BuildRight Web Design. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Crafted for <span className="text-blue-400">Construction Startups</span></p>
            </div>
        </footer>
    );
}