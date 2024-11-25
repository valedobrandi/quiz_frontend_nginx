export default function Table() {
    return (
        <footer className="bg-white border-8 border-black shadow-md 
        rounded-3xl overflow-hidden max-w-4xl ml-10">
            <div className="bg-gray-100 px-4">
                <h2 className="klabamm text-5xl text-center font-semibold text-gray-800 p-4">Top Users</h2>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="flex gap-4 items-center py-4 px-6">
                    <span className="klabamm text-gray-700 text-5xl font-medium p-4">1.</span>
                    <img className="w-20 h-20 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/72.jpg" alt="User avatar" />
                    <h3 className="text-xl font-medium text-gray-800 m-0 p-4">Emily Jones</h3>
                    <p className="text-gray-600 text-xl p-4">1234 points</p>
                </li>
                <li className="flex gap-4 items-center py-4 px-6">
                    <span className="klabamm text-gray-700 text-5xl font-medium p-4">1.</span>
                    <img className="w-20 h-20 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/72.jpg" alt="User avatar" />
                    <h3 className="text-xl font-medium text-gray-800 m-0 p-4">Emily Jones</h3>
                    <p className="text-gray-600 text-xl p-4">1234 points</p>
                </li>
            </ul>
        </footer>
    )
}