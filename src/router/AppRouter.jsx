import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRouter } from "./privateRouter"
import { PublicRouter } from "./PublicRouter"


export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HeroesRoutes />
                    </PrivateRouter>
                } />

                {/* <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    )
}
