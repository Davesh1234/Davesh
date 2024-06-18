import React from 'react'

export const Form = () => {
  return (
    <div align="center">
        <h1>FORM</h1>
        <div>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>student name</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>father's name</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
  )
}
