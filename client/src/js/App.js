import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import LoginPage from './Components/LoginPage.js';
import UserPage from './Components/UserPage.js';
import HistoryPage from './Components/HistoryPage';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  render() {
    return (
      <Router basename="/jetify.herokuapp.com">
        <div className="App">
          <Route
            path={`${process.env.PUBLIC_URL}/`} exact
            render={() => <LoginPage cookies={this.props.cookies} handleLogin={this.handleLogin} />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/users/:id`} exact
            render={() => <UserPage cookies={this.props.cookies} />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/users/:id/history`} exact
            render={() => <HistoryPage cookies={this.props.cookies}/>}
          />
        </div>
        <footer>
          Made with&nbsp;&nbsp;
          <img src="https://www.pexels.com/assets/pexels2x-55493e5c9ae2025ef763e735064deee0a368f537950481d2d4e04e9f0ab02473.png" alt="pexels-logo" />
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNODYsMGMtNDcuNjI1NiwwIC04NiwzOC4zNzQ0IC04Niw4NmMwLDQ3LjYyNTYgMzguMzc0NCw4NiA4Niw4NmM0Ny42MjU2LDAgODYsLTM4LjM3NDQgODYsLTg2YzAsLTQ3LjYyNTYgLTM4LjM3NDQsLTg2IC04NiwtODZ6TTEyMS4wNjY3MSwxMjYuMzY0MTljLTEuMzE3OSwwIC0yLjY2MTY1LC0wLjY3MTg4IC0zLjk3OTU2LC0xLjM0Mzc1Yy0xMi41NTg5LC03LjI2MTQyIC0yNy43Nzk0NSwtMTEuMjQwOTkgLTQ0LjMxNzkxLC0xMS4yNDA5OWMtOS4yNTEyLDAgLTE4LjUyODI0LDEuMzE3OTEgLTI3LjEzMzQxLDMuMzA3NjljLTEuMzE3OTEsMCAtMy4zMDc2OSwwLjY3MTg3IC0zLjk1MzczLDAuNjcxODdjLTMuMzA3NjksMCAtNS4yOTc0NywtMi42NjE2NSAtNS4yOTc0NywtNS4yOTc0N2MwLC0zLjMwNzY5IDEuOTg5NzgsLTUuMjk3NDcgNC42MjU2LC01Ljk0MzUxYzEwLjU5NDk1LC0yLjY2MTY2IDIxLjE2NDA2LC0zLjk3OTU3IDMyLjQzMDg5LC0zLjk3OTU3YzE4LjUwMjQsMCAzNS43MTI3NCw0LjYyNTYgNTAuMjYxNDIsMTMuMjMwNzdjMS45ODk3OCwxLjMxNzkxIDMuMzA3NjksMi42MzU4MiAzLjMwNzY5LDUuOTQzNTFjLTAuNjQ2MDMsMi42NjE2NSAtMy4zMDc2OSw0LjY1MTQ0IC01Ljk0MzUxLDQuNjUxNDR6TTEzMC4zMTc5MSwxMDMuODU2MzdjLTEuOTg5NzgsMCAtMy4zMDc2OSwtMC42NDYwMyAtNC42MjU2LC0xLjMxNzkxYy0xMy45MDI2NCwtOC42MDUxNyAtMzMuMDc2OTIsLTEzLjkwMjY0IC01NC45MTI4NiwtMTMuOTAyNjRjLTEwLjU2OTExLDAgLTIwLjQ5MjE5LDEuMzQzNzUgLTI3Ljc3OTQ1LDMuMzA3NjljLTEuOTg5NzgsMC42NzE4NyAtMi42MzU4MSwwLjY3MTg3IC0zLjk3OTU2LDAuNjcxODdjLTMuOTUzNzMsMCAtNi42MTUzOCwtMy4zMDc2OSAtNi42MTUzOCwtNi42MTUzOGMwLC0zLjk3OTU2IDEuOTg5NzgsLTUuOTQzNTEgNS4yOTc0NywtNy4yODcyNmM5LjkyMzA4LC0yLjYzNTgyIDE5Ljg0NjE1LC00LjYyNTYgMzMuNzQ4NzksLTQuNjI1NmMyMi40ODE5NywwIDQ0LjMxNzkxLDUuMjk3NDcgNjEuNTI4MjUsMTUuODkyNDNjMi42MzU4MSwxLjMxNzkgMy45NTM3MiwzLjk1MzcyIDMuOTUzNzIsNi42MTUzOGMwLDMuOTUzNzIgLTIuNjM1ODIsNy4yNjE0MiAtNi42MTUzOCw3LjI2MTQyek0xNDAuOTEyODYsNzcuMzk0ODNjLTEuOTg5NzgsMCAtMi42NjE2NSwtMC42NDYwMyAtNC42MjU2LC0xLjMxNzkxYy0xNS44OTI0MywtOS4yNTEyIC0zOS42OTIzMSwtMTQuNTQ4NjggLTYyLjg0NjE1LC0xNC41NDg2OGMtMTEuOTEyODcsMCAtMjMuODI1NzIsMS4zMTc5MSAtMzQuNDIwNjcsMy45NTM3M2MtMS4zMTc5MSwwIC0yLjYzNTgyLDAuNjcxODcgLTQuNjI1NiwwLjY3MTg3Yy00LjYyNTYsMC42NzE4OCAtNy45MzMyOSwtMy4zMDc2OSAtNy45MzMyOSwtNy45MzMyOWMwLC00LjYyNTYgMi42MzU4MiwtNy4yODcyNiA1Ljk0MzUxLC03LjkzMzI5YzEyLjU4NDczLC0zLjk3OTU3IDI1LjgxNTUsLTUuMjk3NDggNDEuMDM2MDYsLTUuMjk3NDhjMjUuMTE3NzksMCA1MS41NzkzMyw1LjI5NzQ4IDcxLjQyNTQ4LDE2LjUzODQ2YzIuNjYxNjUsMS4zMTc5MSA0LjY1MTQ0LDMuOTUzNzMgNC42NTE0NCw3LjkzMzI5Yy0wLjY3MTg4LDQuNjI1NiAtMy45Nzk1Nyw3LjkzMzI5IC04LjYwNTE3LDcuOTMzMjl6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" alt="spotify-logo"/>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTIzLjg0LDYuODhjLTEuNDc4MTIsMCAtMi45Njk2OSwwLjA1Mzc1IC00LjQwNzUsMC4yMTVjLTAuMzg5NjksMC4wNDAzMSAtMC43OTI4MSwwLjE2MTI1IC0xLjE4MjUsMC4yMTVjLTEuMDQ4MTIsMC4xMzQzOCAtMi4wOTYyNSwwLjMyMjUgLTMuMTE3NSwwLjUzNzVjLTAuMzg5NjksMC4wODA2MyAtMC42ODUzMSwwLjEyMDk0IC0xLjA3NSwwLjIxNWMtMS4wMDc4MSwwLjI0MTg4IC0yLjAyOTA2LDAuNTM3NSAtMy4wMSwwLjg2Yy0wLjMyMjUsMC4xMDc1IC0wLjY0NSwwLjIwMTU2IC0wLjk2NzUsMC4zMjI1Yy0xLjAzNDY5LDAuMzc2MjUgLTIuMTIzMTIsMC44MzMxMyAtMy4xMTc1LDEuMjljLTAuMjQxODcsMC4xMDc1IC0wLjQwMzEyLDAuMjE1IC0wLjY0NSwwLjMyMjVjLTEuMDYxNTYsMC41MTA2MyAtMi4xMDk2OSwxLjAyMTI1IC0zLjExNzUsMS42MTI1Yy0wLjE2MTI1LDAuMDk0MDYgLTAuMzc2MjUsMC4yMjg0NCAtMC41Mzc1LDAuMzIyNWMtMS4wNzUsMC42NDUgLTIuMTA5NjksMS4zMDM0NCAtMy4xMTc1LDIuMDQyNWMtMC4wODA2MiwwLjA2NzE5IC0wLjEzNDM3LDAuMTQ3ODEgLTAuMjE1LDAuMjE1Yy0xLjA3NSwwLjgwNjI1IC0yLjEyMzEyLDEuNjc5NjkgLTMuMTE3NSwyLjU4Yy0wLjAyNjg3LDAuMDI2ODggLTAuMDgwNjIsLTAuMDI2ODcgLTAuMTA3NSwwYy0xLjAzNDY5LDAuOTQwNjMgLTEuOTc1MzEsMS45NzUzMSAtMi45MDI1LDMuMDFjLTYuNTU3NSw3LjMxIC0xMC42NDI1LDE2Ljk0NDY5IC0xMC42NDI1LDI3LjUyYzAsMTQuMjcwNjMgNy4zNTAzMSwyNC4wNTMxMyAxNS4xNTc1LDM0LjRjMi44MzUzMSwzLjc2MjUgNS44NTg3NSw3LjcyNjU2IDguNzA3NSwxMi4xNDc1YzYuMTQwOTQsNy43MTMxMyAxMS44MTE1NiwxNi43ODM0NCAxNC45NDI1LDI4LjgxYzAuNDgzNzUsMS44Njc4MSAwLjQ3MDMxLDMuMzMyNSAxLjI5LDMuOTc3NWMwLjM3NjI1LDAuMDgwNjMgMC43MzkwNiwwLjEwNzUgMS4xODI1LDAuMTA3NWMwLjQ0MzQ0LDAgMC44MDYyNSwtMC4wNDAzMSAxLjE4MjUsLTAuMTA3NWMwLjgxOTY5LC0wLjY0NSAwLjgwNjI1LC0yLjEwOTY5IDEuMjksLTMuOTc3NWMzLjEzMDk0LC0xMi4wMjY1NiA4LjgwMTU2LC0yMS4wOTY4NyAxNC45NDI1LC0yOC44MWMyLjg0ODc1LC00LjQyMDk0IDUuODcyMTksLTguMzk4NDQgOC43MDc1LC0xMi4xNDc1YzAuNDgzNzUsLTAuNjMxNTYgMC45MjcxOSwtMS4zMDM0NCAxLjM5NzUsLTEuOTM1YzAuNzM5MDYsLTAuOTgwOTQgMS40Mzc4MSwtMS45MjE1NiAyLjE1LC0yLjkwMjVjMC4zMzU5NCwtMC40NTY4NyAwLjYzMTU2LC0wLjk0MDYyIDAuOTY3NSwtMS4zOTc1YzAuNTM3NSwtMC43NjU5NCAxLjA4ODQ0LC0xLjQ5MTU2IDEuNjEyNSwtMi4yNTc1YzAuMzc2MjUsLTAuNTY0MzcgMC43MTIxOSwtMS4xNTU2MiAxLjA3NSwtMS43MmMwLjQ1Njg4LC0wLjY5ODc1IDAuOTgwOTQsLTEuMzMwMzEgMS4zOTc1LC0yLjA0MjVjMC4zNzYyNSwtMC42MzE1NiAwLjcyNTYzLC0xLjI5IDEuMDc1LC0xLjkzNWMwLjM3NjI1LC0wLjY3MTg3IDAuNzM5MDYsLTEuMzU3MTkgMS4wNzUsLTIuMDQyNWMwLjM0OTM4LC0wLjY5ODc1IDAuNjU4NDQsLTEuNDM3ODEgMC45Njc1LC0yLjE1YzAuMjk1NjMsLTAuNjU4NDQgMC42MDQ2OSwtMS4zNzA2MiAwLjg2LC0yLjA0MjVjMC4zMDkwNiwtMC43OTI4MSAwLjQ5NzE5LC0xLjU0NTMxIDAuNzUyNSwtMi4zNjVjMC4yMDE1NiwtMC42NDUgMC40NzAzMSwtMS4yNzY1NiAwLjY0NSwtMS45MzVjMC4yNDE4OCwtMC45Njc1IDAuMzYyODEsLTIuMDAyMTkgMC41Mzc1LC0zLjAxYzAuMDk0MDYsLTAuNTY0MzcgMC4yNTUzMSwtMS4wMzQ2OSAwLjMyMjUsLTEuNjEyNWMwLjIwMTU2LC0xLjYxMjUgMC4zMjI1LC0zLjMxOTA2IDAuMzIyNSwtNS4wNTI1YzAsLTIyLjc2MzEyIC0xOC41MTY4NywtNDEuMjggLTQxLjI4LC00MS4yOHpNMjEuODIyNSwyMC42NGMtOC4yMjM3NSwwIC0xNC45NDI1LDYuNzE4NzUgLTE0Ljk0MjUsMTQuOTQyNXYxMTQuNTk1YzAsMC43NzkzOCAwLjA5NDA2LDEuNTA1IDAuMjE1LDIuMjU3NWMxLjEwMTg4LDcuMTM1MzEgNy4yODMxMywxMi42ODUgMTQuNzI3NSwxMi42ODVoMTE0LjU5NWMwLjc3OTM4LDAgMS41MDUsLTAuMDk0MDYgMi4yNTc1LC0wLjIxNWM2Ljc1OTA2LC0xLjA0ODEyIDEyLjA0LC02LjYyNDY5IDEyLjU3NzUsLTEzLjU0NWgwLjEwNzV2LTU5LjIzMjVjLTEuNDM3ODEsMS45NzUzMSAtMi44ODkwNiw0LjA0NDY5IC00LjMsNi4yMzVsLTAuNDMsMC42NDVjLTYuOTc0MDYsOC43NjEyNSAtMTEuMjA2ODcsMTYuODM3MTkgLTEzLjY1MjUsMjYuMjNjLTAuMTA3NSwwLjQwMzEzIC0wLjE0NzgxLDAuNzI1NjMgLTAuMjE1LDEuMDc1Yy0wLjI2ODc1LDEuMzk3NSAtMC43NjU5NCwzLjYyODEzIC0yLjM2NSw1LjQ4MjVsMTQuMDgyNSwxNC4wODI1djQuM2MwLDQuNDIwOTQgLTMuNjQxNTYsOC4wNjI1IC04LjA2MjUsOC4wNjI1aC00LjNsLTQ4LjM3NSwtNDguMjY3NWwxMi4zNjI1LC0xMi41Nzc1bDEyLjI1NSwxMi4zNjI1Yy0yLjAxNTYyLC0zLjU2MDk0IC00LjQwNzUsLTcuMTA4NDQgLTcuMzEsLTEwLjc1bC0wLjQzLC0wLjY0NWMtMi4wMDIxOSwtMy4xMDQwNiAtNC4wMzEyNSwtNS44MTg0NCAtNi4wMiwtOC40OTI1bC02OC40Nzc1LDY4LjM3aC00LjNjLTQuNDIwOTQsMCAtOC4wNjI1LC0zLjY0MTU2IC04LjA2MjUsLTguMDYyNXYtNC4zbDcwLjQxMjUsLTcwLjUyYy00Ljg1MDk0LC03LjY4NjI1IC04LjQ5MjUsLTE2LjI0NTk0IC04LjQ5MjUsLTI3LjE5NzVjMCwtMTAuMjI1OTQgMy4yMzg0NCwtMTkuNzEyODEgOC43MDc1LC0yNy41MnpNNDEuNzEsMzQuNGM1LjQ1NTYzLDAgMTAuMzQ2ODgsMi4wODI4MSAxNC4wODI1LDUuNDgyNWwtNS45MTI1LDUuOTEyNWMtMi4yMTcxOSwtMS44OTQ2OSAtNS4wMjU2MiwtMy4wMSAtOC4xNywtMy4wMWMtNy4wMDA5NCwwIC0xMi42ODUsNS42ODQwNiAtMTIuNjg1LDEyLjY4NWMwLDcuMDAwOTQgNS42ODQwNiwxMi42ODUgMTIuNjg1LDEyLjY4NWM1Ljg4NTYzLDAgOS45MDM0NCwtMy41MjA2MiAxMS4zOTUsLTguMzg1aC0xMS4zOTV2LTguMDYyNWgxOS43OGMxLjczMzQ0LDguMTk2ODggLTEuMzk3NSwyNC43MjUgLTE5Ljc4LDI0LjcyNWMtMTEuNjEsMCAtMjEuMDcsLTkuMzUyNSAtMjEuMDcsLTIwLjk2MjVjMCwtMTEuNjEgOS40NiwtMjEuMDcgMjEuMDcsLTIxLjA3ek0xMjMuODQsMzcuODRjNS42OTc1LDAgMTAuMzIsNC42MjI1IDEwLjMyLDEwLjMyYzAsNS42OTc1IC00LjYyMjUsMTAuMzIgLTEwLjMyLDEwLjMyYy01LjY5NzUsMCAtMTAuMzIsLTQuNjIyNSAtMTAuMzIsLTEwLjMyYzAsLTUuNjk3NSA0LjYyMjUsLTEwLjMyIDEwLjMyLC0xMC4zMnoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" alt="google-map-logo"/>
          <img src="data:image/png;base64,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" alt="react-logo" />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAHugAAB7oBj/ZIjgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOGSURBVHic7Z07a1VBFIW/bQS10CaWmkbENxaCoKDGgIWKnYi9YG3lf7BRUFD/gwiCoha+Eh+gYBWVgIIoliZIsNAiWRb3CEd8ncfcu0/m7q+6cJnZ68ziziQzszgQBEEQBEEQBEEQBEEQDAvWpJGkMeACsB9Ym1TR//kMPAbOmtm7uo0lrQcOAweAzcAYMFJ8vQB8AGaASeCOmX1KIToZksYkzcmfOfUGs4rmEUknJD2StFCjxoKkB5KOS1rW77GthKTrqUeyBdcq6J2QNJOg1htJBwYxxv97oPkED5OKL//QuUrSZUmLCestSrooaWWq8ay9BkhSquIpMLPfnkHSWuAusKtPZZ8DR81stm1H2RkgaZTeArqtz6WngXEzm2vTSTcWlkQUU8Nt+j/4ADuAm5JWtOkkKwOA88DuAdbbC5xr00E2U5Cko8AtJxmHzOxek4ZZGCBpBHhF7x8rD14BO81ssW7DXKagk/gNPsB24ESThrkYcMZbAA01LPkpCNgIvPUWAQjYYGbv6zTK4Rdw2FtAgdFASw4G7PEWUKK2lhwM2OotoERtLTkYsM5bQIlK2+NlcjBgtbeAEmvqNsjBgEanel0hBwPmvQWUqK0lBwM+egso8aFugxwMmPEWUKK2lhwMmPIWUKK2lhwMuEdvG8Ab0dNSiyVvQHE36Km3DmCq7j4QZGBAwQVvAfRO42qz5HdDSwcy08AWJxnDfSBjZgvAaXzWgkXgVJPBh0wMADCzJ8BVh9KXzOxF08ZZTEE/PxfXUiYZ3M2IZ8CEmX1v2kE2vwAAM/sGHAFeD6DcNHCszeBDZgYAFNcFx4GXfSzzHDjY9lYcZGgAgJl9BvYBV0i7MAu4RO9KYut7oc0UdIwKerO7nt4pKmrubEAjq7+CqqA/R5RGi69nGXBEaXk/O19C/DXo0TkSzyCtqai5s1NQbdIPYTsq6O30ItwNV/uAiowYvT36TQm63AI8VGTEfiUyYs5ERqxDKDJi7kRGbNBERsyZyIh1g8iIORMZMUciI+ZMZMSciYyYM5ERcyYyYs5ERsyZyIg5ExkxZyIj5kxkxJyJjJgzkRHzJDJi3SAyYl5ERqwDREasA0RGzInIiHWIyIh1gGHIiH1tWzQhf9z8yj0jdiPBVe9UDOUrTDYrXuKTjLavsTrE4E+k5oH7pH2NlVtGLAiCIAiCIAiCIAiCIBgefgBcBs8iv+pAYQAAAABJRU5ErkJggg==" alt="icons8-logo" />
        </footer>
      </Router>
    );
  }
}

export default withCookies(App);