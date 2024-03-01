import { memo,FC } from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../components/pages/Login"

export const Roouter:FC = memo(()=>{
    return(
        <Switch>
            <Route>
                <Login></Login>
            </Route>
        </Switch>
    )
})