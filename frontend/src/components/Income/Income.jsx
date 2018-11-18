import './Income.scss';

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


function getTime() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}


const suggestions = [
    { label: 'Квартплата' },
    { label: 'Зарплата' },
    { label: 'Еда' },
    { label: 'Одежда' },
    { label: 'Медецина' },
    { label: 'Транспорт' },
    { label: 'Развлечения' },
    { label: 'Кино' },
    { label: 'Разное' },
    { label: 'Кафе и рестораны' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
    {
        value: 'RUB',
        label: '₽',
    },
];


class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: 'RUB',
            category:'',
            hashinput:'',
            hashtags:[],
            result : '',
            prevresult:0,
            action:'',

        };
    }

    calculate = () =>{
      const first =  +this.state.prevresult;
      const second = +this.state.result;
      const action = this.state.action;
      let res = 0;
      switch (action){
          case '+':
              res = first + second;
              break;
          case '-':
              res = first - second;
              break;
          case '*':
              res = first * second;
              break;
          case '/':
              res = first / second;
              break;
      }
      if ( res && res >= 0 && res <= 999999999)
        this.setState({
            result: res.toFixed(2),
            action:'',
            prevresult:''
        });
      else{
          this.setState({
              result: 'error',
              action:'',
              prevresult:''
          });
      }
    };

    handleDelete = data => () => {
        this.setState({
            hashtags: this.state.hashtags.filter(hashtag => hashtag !== data)
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    hashChange = event =>{
        const value = event.target.value;
        if(value[value.length-1] === ' '){
            this.setState({
                hashtags: this.state.hashtags.concat([value]),
                hashinput:'',
            })
        }else {
            this.setState({
                hashinput: value,
            })
        }
    };

    changeSumm = event=>{
        const value = event.target.value;
        this.setState({
            result : value.match(/^[\d]{1,9}[.,]?[\d]{0,2}/g) ?
                value.match(/^[\d]{1,9}[.,]?[\d]{0,2}/g).join().replace(',','.'):
                0,
        });
    };

    backspaseHandle = () => {
        this.setState({
            result : this.state.result.slice(0,-1),
        });
    };

    getProcent = ()=>{
      const main = +(this.state.prevresult);
      console.log(main);
      const procent = + this.state.result;
      const result = (main/100) * procent;
      this.setState({
          result: result.toString().match(/^[\d]{1,9}[.,]?[\d]{0,2}/g) ?
              result.toString().match(/^[\d]{1,9}[.,]?[\d]{0,2}/g).join(): 0
      })
    };

    calculatorHandle = event=> {
        console.log(event.target.innerText);
        const clicked = event.target.innerText;
        switch (clicked){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                console.log('digit');
                this.setState({
                    result : this.state.result.match(/^[\d]{1,9}[.,]?[\d]{0,2}/g)?
                        this.state.result.concat(clicked) : clicked,
                });
                break;
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    result : '',
                    action: clicked,
                    prevresult : this.state.result
                });
                break;
            case '%':
                this.getProcent();
                break;
            case 'C':
                this.setState({
                    result : '',
                    action: '',
                    prevresult : ''
                });
                break;
            case '=':
                this.calculate();
                break;
        }
    };
    
    render() {
        console.log(this.state.result);
        return (
            <div className="income">
                <Paper className='transaction' elevation={1}>
                    <form noValidate>
                        <TextField
                            id="date"
                            label="Дата"
                            type="date"
                            fullWidth
                            defaultValue={getTime()}
                            className="transaction-calendar"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant={'standard'}
                        />
                        <TextField
                            id="Category"
                            select
                            fullWidth
                            label="Категория"
                            value={this.state.category}
                            onChange={this.handleChange('category')}
                            margin="normal"
                        >
                            {suggestions.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {this.state. hashtags.map((data, key) => {
                            return (
                                <Chip
                                    key={key}
                                    label={data}
                                    onDelete={this.handleDelete(data)}
                                    color="primary"
                                />
                            );
                        })}
                        <FormControl fullWidth >
                            <InputLabel htmlFor="hashtags">Хештеги</InputLabel>
                            <Input
                                id="hashtags"
                                value={this.state.hashinput}
                                onChange={this.hashChange}
                                startAdornment={<InputAdornment position="start">#</InputAdornment>}
                            />
                        </FormControl>
                        <div className="transaction-summwindow">
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Валюта"
                                value={this.state.currency}
                                onChange={this.handleChange('currency')}
                                margin="normal"
                            >
                                {currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                // disabled
                                id="outlined-disabled"
                                label="Сумма"
                                InputLabelProps = {{
                                    shrink: true
                                }
                                }
                                value={this.state.result}
                                placeholder={'0'}
                                margin="normal"
                                onChange={this.changeSumm}
                            />
                            <Button variant="contained" onClick={this.backspaseHandle}>
                                <KeyboardArrowLeft/>
                            </Button>
                        </div>
                        <div className="calculator">
                            <div className="calculator-row">
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    7
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    8
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    9
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    /
                                </Button>
                            </div>
                            <div className="calculator-row">
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    4
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    5
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    6
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    *
                                </Button>
                            </div>
                            <div className="calculator-row">
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    1
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    2
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    3
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    -
                                </Button>
                            </div>
                            <div className="calculator-row">
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    .
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    0
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    %
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    +
                                </Button>
                            </div>
                            <div className="calculator-row">
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    C
                                </Button>
                                <Button variant="contained" className="calculator-button" onClick={this.calculatorHandle}>
                                    =
                                </Button>
                            </div>
                        </div>
                    </form>
                    <Button variant="contained" color="primary" fullWidth className={'transaction-saveButton'}>
                        Сохранить
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default Income;