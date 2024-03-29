import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons({FilterFunciton }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}} className='p-4'>
            <Stack direction="row" spacing={2}>
                <Button className="btn btn-outline btn-warning" onClick={FilterFunciton[0]}>
                    All
                </Button>
                <Button className="btn btn-outline btn-warning" onClick={FilterFunciton[1]}>
                    Prachachuen
                </Button>
                <Button className="btn btn-outline btn-warning" onClick={FilterFunciton[2]}>
                    Kanok
                </Button>
                <Button className="btn btn-outline btn-warning" onClick={FilterFunciton[3]}>
                    Indara
                </Button>
                <Button className="btn btn-outline btn-warning" onClick={FilterFunciton[4]}>
                    Buranapol
                </Button>
            </Stack>
        </div>
    );
}