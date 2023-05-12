export default function Perks() {
    <div>

        <h2 className="text-2xl font-semibold ml-4 mt-3"> Perks </h2>
        <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="border border-gray-300 bg-gray-200 w-full p-3">
                <input type="checkbox" name="Wifi" />
                <label> Wifi </label>
            </div>
            <div className="border border-gray-300 bg-gray-200 w-full p-3 ">
                <input type="checkbox" name="Parking space" />
                <label> Parking space </label>
            </div>
            <div className="border border-gray-300 bg-gray-200 w-full  p-3">
                <input type="checkbox" name="Pets" />
                <label> Pets </label>
            </div>
            <div className="border border-gray-300 bg-gray-200 w-full p-3">
                <input type="checkbox" name="Radio" />
                <label> Radio </label>
            </div>
            <div className="border border-gray-300 bg-gray-200 w-full p-3">
                <input type="checkbox" name="Water" />
                <label> 24*7 Water Supply </label>
            </div>
            <div className="border border-gray-300 bg-gray-200 w-full p-3">
                <input type="checkbox" name="park" />
                <label> Park </label>
            </div>
        </div>
    </div>

}