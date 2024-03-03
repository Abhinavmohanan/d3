'use client'
import { Input } from "@/components/ui/input"
import { useForm, Controller } from 'react-hook-form';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import routineImage from "@/assets/images/routine_image.jpg"
import Image from "next/image";

export default function Component() {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        // Handle the form submission here, you can log the data or send it to the backend
        console.log(data);
    };
    return (
        <div className="p-28 space-x-28 flex flex-row gap-10 mx-auto bg-white">
            <div className="text-2xl font-semibold mb-6">
                <div className="text-5xl pb-8">Yoga Routine Generation Form</div>
                <Image src={routineImage} height={900} />
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-xl font-medium mb-4">Personal Information</h2>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium" htmlFor="name">
                        Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium" htmlFor="age">
                        Age
                    </label>
                    <Input id="age" placeholder="Enter your age" type="number" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium" htmlFor="gender">
                        Gender
                    </label>
                    <Select>
                        <SelectTrigger id="gender">
                            <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <h2 className="text-xl font-medium mb-4">User's Yoga Experience</h2>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium" htmlFor="level">
                        Level
                    </label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Select>
                                <SelectTrigger id="level">
                                    <SelectValue placeholder="Select Level" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />

                </div>
                <h2 className="text-xl font-medium mb-4">Goals and Needs</h2>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Focus Area</label>
                    <div className="flex flex-wrap gap-4">
                        <Checkbox id="strength" />
                        <label htmlFor="strength">Strength</label>
                        <Checkbox id="flexibility" />
                        <label htmlFor="flexibility">Flexibility</label>
                        <Checkbox id="stress-relief" />
                        <label htmlFor="stress-relief">Stress Relief</label>
                        <Checkbox id="improved-balance" />
                        <label htmlFor="improved-balance">Improved Balance</label>
                        <Checkbox id="injury-rehabilitation" />
                        <label htmlFor="injury-rehabilitation">Injury Rehabilitation</label>
                    </div>
                    <label className="font-medium">Overall Goal</label>
                    <div className="flex flex-wrap gap-4">
                        <Checkbox id="relaxation" />
                        <label htmlFor="relaxation">Relaxation</label>
                        <Checkbox id="increased-stamina" />
                        <label htmlFor="increased-stamina">Increased Stamina</label>
                        <Checkbox id="weight-management" />
                        <label htmlFor="weight-management">Weight Management</label>
                        <Checkbox id="improved-posture" />
                        <label htmlFor="improved-posture">Improved Posture</label>
                    </div>
                </div>
                <h2 className="text-xl font-medium mb-4">Practice Preferences</h2>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium" htmlFor="time-availability">
                        Time Availability
                    </label>
                    <Select>
                        <SelectTrigger id="time-availability">
                            <SelectValue placeholder="Select Time" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="15min">15 min</SelectItem>
                            <SelectItem value="30min">30 min</SelectItem>
                            <SelectItem value="1hour">1 hour</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Style Preference</label>
                    <div className="flex flex-wrap gap-4">
                        <Checkbox id="vinyasa" />
                        <label htmlFor="vinyasa">Vinyasa</label>
                        <Checkbox id="hatha" />
                        <label htmlFor="hatha">Hatha</label>
                        <Checkbox id="yin" />
                        <label htmlFor="yin">Yin</label>
                        <Checkbox id="restorative" />
                        <label htmlFor="restorative">Restorative</label>
                        <Checkbox id="ashtanga" />
                        <label htmlFor="ashtanga">Ashtanga</label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Practice Environment</label>
                    <div className="flex flex-wrap gap-4">
                        <Checkbox id="gym-class" />
                        <label htmlFor="gym-class">Gym class</label>
                        <Checkbox id="home-practice" />
                        <label htmlFor="home-practice">Home practice</label>
                        <Checkbox id="access-to-props" />
                        <label htmlFor="access-to-props">Access to props</label>
                    </div>
                </div>
                <h2 className="text-xl font-medium mb-4">Medical Conditions</h2>
                <p className="text-sm mb-4">Please consult a doctor before starting any new exercise program.</p>
                <Button className="w-full" type="submit">Get routine</Button>
            </form>
        </div>
    )
}

