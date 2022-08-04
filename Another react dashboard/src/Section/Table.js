import React from 'react'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const Table = () => {
  return (
   
    <div className="table-responsive">
    <table className="table table-striped table-sm">
        <TableHeader/>
        <TableBody/>
    </table>
    </div>
    
  )
}
