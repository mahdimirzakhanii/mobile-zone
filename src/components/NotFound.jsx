
const NotFound = () => {
    return (
        <div className="mt-32 w-full flex justify-evenly items-center">
            <img width={310} src="/public/assets/image/public/not-found.jpg" alt="404" />
            <div className="flex flex-col items-center justify-center">
                <img width={310} src="/public/assets/image/public/404.png" alt="404" />
                <p className="text-gray-blue-800 text-5xl">Page Not Found</p>
            </div>
        </div>
    )
}

export default NotFound