import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useRouter} from 'next/router';
import { Button } from '@mui/material';

export default function BooksTable(props) {
  const sendToRoute = (key) => {
    const inputString = key;
    const parts = inputString.split("/");
    const result = parts.pop();
    router.push(`/book/${result}`);
  }
  const router = useRouter();
    return <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Books in all Languages</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.books.map((book,index)=> {
            return <TableRow
              key={index}
            >
               <TableCell>
                  {book.title}
              </TableCell>
              <TableCell>
                  <Button variant="text" onClick={() => {sendToRoute(book.key)}}>DETAILS</Button>
              </TableCell>
            </TableRow>
          })}
      </TableBody>
    </Table>
  </TableContainer>
}