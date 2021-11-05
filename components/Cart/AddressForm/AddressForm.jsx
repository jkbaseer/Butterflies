import React from "react";

const AddressForm = ({ onSubmit, handleSubmit, register }) => {
	return (
		<form
			className=" w-screen xs:w-[500px] mt-7 mb-7 bg-[#FEFEFE] rounded-lg p-[31px]"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className="text-2xl font-bold">Shipping Address</h2>
			<div className="mt-8  w-full">
				<div className="grid grid-cols-1 gap-6">
					<label className="block">
						<span className="text-gray-700">
							Name
						</span>
						<input
							type="text"
							className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
							placeholder=""
							{...register("name", {
								required: true,
							})}
						/>
					</label>
					<label className="block">
						<span className="text-gray-700">
							Phone Number
						</span>
						<input
							type="number"
							className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
							placeholder=""
							{...register("phone_number", {
								required: true,
							})}
						/>
					</label>
					<label className="block">
						<span className="text-gray-700">
							Address
						</span>
						<input
							type="text"
							className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
							placeholder="Address"
							placeholder=""
							{...register(
								"address_line_1",
								{
									required: true,
								}
							)}
						/>
					</label>
					<div className="grid grid-cols-[100%] sm:grid-cols-[30%,30%,30%] sm:gap-[3.33%] ">
						<label className="block">
							<span className="text-gray-700">
								Country
							</span>
							<input
								type="text"
								className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
								placeholder=""
								{...register(
									"country",
									{
										required: true,
									}
								)}
							/>
						</label>
						<label className="block">
							<span className="text-gray-700">
								State
							</span>
							<input
								type="text"
								className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
								placeholder=""
								{...register("state", {
									required: true,
								})}
							/>
						</label>
						<label className="block">
							<span className="text-gray-700">
								Postal Code
							</span>
							<input
								type="number"
								className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
								placeholder="123456"
								{...register(
									"post_code",
									{
										required: true,
									}
								)}
							/>
						</label>
					</div>
				</div>
			</div>
			<div className="mt-4 flex justify-center">
				<button
					className=" bg-primary rounded-lg px-4 py-2 text-white text-base font-semibold"
					type="submit"
				>
					Save Address
				</button>
			</div>
		</form>
	);
};

export default AddressForm;