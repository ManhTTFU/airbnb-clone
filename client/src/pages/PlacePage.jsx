import React from 'react'
import { Link, useParams } from 'react-router-dom'

function PlacePage() {
    const { action } = useParams()
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
                            <input type="text" placeholder="title" />
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default PlacePage
