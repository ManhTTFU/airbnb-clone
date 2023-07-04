import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perks from './Perks'

function PlacesPage() {
    const { action } = useParams()
    // const { id } = useParams()
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState('')
    const [perks, setPerks] = useState([])
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)
    // const [price, setPrice] = useState(100)
    // const [redirect, setRedirect] = useState(false)
    return (
        <>
            <div>
                {action !== 'new' && (
                    <div className="text-center">
                        <Link
                            className="inline-flex bg-primary text-white py-2 px-4 rounded-full"
                            to={'/account/places/new'}
                        >
                            Add new place
                        </Link>
                    </div>
                )}

                {action === 'new' && (
                    <div>
                        <form>
                            <h2 className="text-xl mt-4">Title</h2>
                            <input
                                type="text"
                                placeholder="title"
                                value={title}
                                onChange={(ev) => setTitle(ev.target.value)}
                            />
                            <h2 className="text-xl mt-4">Address</h2>
                            <input
                                type="text"
                                placeholder="address"
                                value={address}
                                onChange={(ev) => setAddress(ev.target.address)}
                            />
                            <h2 className="text-xl mt-4">Photos</h2>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="{'add using a link ...jpb'}"
                                />
                                <button className="bg-gray-200 px-4 rounded-2xl">
                                    Add&nbsbl;photo
                                </button>
                            </div>
                            <div className="mt-3 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4">
                                <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                                    Upload
                                </button>
                            </div>
                            <h2 className="text-xl mt-4">Description</h2>
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(ev) =>
                                    setDescription(ev.target.value)
                                }
                            />
                            <Perks selected={perks} onChange={setPerks} />
                            <h2 className="text-xl mt-4">Extra info</h2>
                            <input
                                type="text"
                                placeholder="Extra info"
                                value={extraInfo}
                                onChange={(ev) => setExtraInfo(ev.target.value)}
                            />
                            <div className="grid gap-2 sm:grid-cols-3">
                                <div className="mt-2 -mb-1">
                                    <h3>Check in time</h3>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={checkIn}
                                        onChange={(ev) =>
                                            setCheckIn(ev.target.value)
                                        }
                                    />
                                </div>
                                <div className="mt-2 -mb-1">
                                    {' '}
                                    <h3>Check out time</h3>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={checkOut}
                                        onChange={(ev) =>
                                            setCheckOut(ev.target.value)
                                        }
                                    />
                                </div>
                                <div className="mt-2 -mb-1">
                                    <h3>Max number of guests</h3>
                                    <input
                                        type="number"
                                        placeholder=""
                                        value={maxGuests}
                                        onChange={(ev) =>
                                            setMaxGuests(ev.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <button className="primary my-4">Save</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default PlacesPage
