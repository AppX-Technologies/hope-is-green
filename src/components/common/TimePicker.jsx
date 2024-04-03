import React, { useEffect, useState } from "react";

const TimePicker = ({ value, disabled, className, onChange }) => {
	const [time, setTime] = useState();

	const HH_TIME_FORMAT = /^([01]?[0-9]|2[0-3]):[0-5]?[0-9]$/;

	const onTimeChange = (value, type) => {
		let newTime = { ...time, [type]: value };
		setTime(newTime);
		onChange(Object.values(newTime)?.join(":"));
	};

	useEffect(() => {
		if (HH_TIME_FORMAT.test(value)) {
			let [hour, minute] = value.split(":");
			setTime({
				hour,
				minute,
			});
		} else {
			setTime({
				hour: "08", // Set initial hour to 08
				minute: "00", // Set initial minute to 00
			});
		}
	}, [value]);

	return (
		<div
			className={`d-flex align-items-center ${className}`}
			style={{ width: "fit-content" }}
		>
			<select
				className="mid py-1"
				style={{
					border: "1px solid #d4d4d4",
					borderRadius: "5px",
					background: "none",
				}}
				disabled={disabled}
				name="hour"
				id="hour"
				value={time?.hour}
				onChange={(e) => onTimeChange(e.target.value, "hour")}
			>
				{Array.from({ length: 24 }, (_, index) => {
					let hourValue = (index + 8) % 24; // Wrap back to 01:00 after 24:00
					if (hourValue === 0) hourValue = "00"; // Convert 0 to 00 for midnight
					hourValue = hourValue.toString().padStart(2, "0");
					return (
						<option className="mid" value={hourValue} key={hourValue}>
							{hourValue}
						</option>
					);
				})}
			</select>
			<select
				className="mid py-1 ms-1"
				style={{
					border: "1px solid #d4d4d4",
					borderRadius: "5px",
					background: "none",
				}}
				disabled={disabled}
				name="minute"
				id="minute"
				value={time?.minute}
				onChange={(e) => onTimeChange(e.target.value, "minute")}
			>
				{Array.from({ length: 60 }, (_, index) => {
					const minuteValue = index.toString().padStart(2, "0");
					return (
						<option className="mid" value={minuteValue} key={minuteValue}>
							{minuteValue}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default TimePicker;
