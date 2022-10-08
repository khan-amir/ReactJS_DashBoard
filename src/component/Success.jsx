import { CheckCircleFilled, HomeOutlined} from '@ant-design/icons';
import { Button, Avatar } from 'antd';
import React from 'react';
import { faker } from '@faker-js/faker';

import './antfile.css'




const Success = ({setClient}) => {




  return (
    <>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '24px',
        gap: '24px',
        height: '88px',
        left: '356px',
        top: '92px',
        background: '#FFFFFF',
        boxShadow: '0px 1px 5px rgba(3, 0, 55, 0.08)',
        borderRadius: '8px',
        justifyContent: 'space-between'
      }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <CheckCircleFilled style={{fontSize: 35, color: '#51bb0e'}}/>
        <label style={{
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '24px',
            color: '#030037',
            marginLeft: '10px'
        }}>You have successfully added Infosys.</label>
        </div>
        <div>
            <Button style={{
                gap: '12px',
                width: '148px',
                height: '40px',
                background: '#F8F9FD',
                borderRadius: '8px',
                color: '#153AC7',
                marginRight: '20px'
            }}>Go to Client Master</Button>
            <Button style={{
                gap: '12px',
                width: '148px',
                height: '40px',
                background: '#153AC7',
                borderRadius: '8px',
                color: '#FFFFFF'
            }}>Add More Clients</Button>
        </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '30px'
        }}>
            {/* card 1 */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 24px 16px',
                gap: '32px',
                width: '292.8px',
                height: '326px',
                background: '#FFFFFF',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
            }}>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                            }} src={faker.image.business()}
                    />
                    <label style={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#030037',
                        marginTop: '15px'
                    }}>{faker.company.name()}</label>
                    <label style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.0025em',
                        color: '#686687'
                        
                    }}>4 Clients</label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Button style={{
                    gap: '12px',
                    width: '148px',
                    height: '40px',
                    background: '#F8F9FD',
                    borderRadius: '8px',
                    color: '#153AC7'
                    }}>Add FCM</Button>
                    <label style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.01em',
                        color: '#686687',
                        marginTop: '25px'
                    }}>View All</label>
                </div>
                
            </div>

            {/* card 2 */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 24px 16px',
                gap: '32px',
                width: '292.8px',
                height: '326px',
                background: '#FFFFFF',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                marginLeft: '25px'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                            }} src={faker.image.business()}
                    />
                    <label style={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#030037',
                        marginTop: '15px'
                    }}>{faker.company.name()}</label>
                    <label style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.0025em',
                        color: '#686687'
                        
                    }}>--</label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Button style={{
                    gap: '12px',
                    width: '148px',
                    height: '40px',
                    background: '#F8F9FD',
                    borderRadius: '8px',
                    color: '#153AC7'
                    }}>Add Client </Button>
                    <label style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.01em',
                        color: '#686687',
                        marginTop: '25px'
                    }}>View All</label>
                </div>
                
            </div>
            {/* card 3 */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 24px 16px',
                gap: '32px',
                width: '292.8px',
                height: '326px',
                background: '#FFFFFF',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                marginLeft: '25px'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar style={{
                        background: '#F5F5F7'
                    }} size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                            }}
                            icon={<HomeOutlined style={{
                                color: '#153AC7'
                            }} />}
                    />
                    <label style={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#030037',
                        marginTop: '15px'
                    }}>Sites</label>
                    <label style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.0025em',
                        color: '#686687'
                        
                    }}>--</label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Button style={{
                    gap: '12px',
                    width: '148px',
                    height: '40px',
                    background: '#153AC7',
                    borderRadius: '8px',
                    color: '#FFFFFF'
                    }}>Go to Config</Button>
                    <label style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.01em',
                        color: '#686687',
                        marginTop: '25px'
                    }}>View All</label>
                </div>
                
            </div>
            {/* card 4 */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 24px 16px',
                gap: '32px',
                width: '292.8px',
                height: '326px',
                background: '#F5F5F5',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                marginLeft: '25px'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                            }}
                            icon={<HomeOutlined style={{
                                color: '#B8BABC'
                            }} />}
                    />
                    <label style={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#B8BABC',
                        marginTop: '15px'
                    }}>Tenant Groups</label>
                    <label style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.0025em',
                        color: '#686687'
                        
                    }}>--</label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Button style={{
                    gap: '12px',
                    width: '148px',
                    height: '40px',
                    background: '#ECECEC',
                    borderRadius: '8px',
                    color: '#B8BABC'
                    }}>Add Tenant Group</Button>
                    <label style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.01em',
                        color: '#B8BABC',
                        marginTop: '25px'
                    }}>View All</label>
                </div>
                
            </div>
            {/* card 5*/}
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 24px 16px',
                gap: '32px',
                width: '292.8px',
                height: '326px',
                background: '#F5F5F5',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                marginLeft: '25px'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                            }}
                            icon={<HomeOutlined style={{
                                color: '#B8BABC'
                            }} />}
                    />
                    <label style={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#B8BABC',
                        marginTop: '15px'
                    }}>Tenants</label>
                    <label style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.0025em',
                        color: '#686687'
                        
                    }}>--</label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Button style={{
                    gap: '12px',
                    width: '148px',
                    height: '40px',
                    background: '#ECECEC',
                    borderRadius: '8px',
                    color: '#B8BABC'
                    }}>Add Tenant</Button>
                    <label style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.01em',
                        color: '#B8BABC',
                        marginTop: '25px'
                    }}>View All</label>
                </div>
                
            </div>
        </div>
      </>
  );
};

export default Success;