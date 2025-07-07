
'use client'
import { useState, useEffect } from 'react'

type Appointment = {
  id: number;
  date: string;
  doctor: string;
  specialty: string;
};

type Prescription = {
  id: number;
  name: string;
  dosage: string;
  refills: number;
};

type UserData = {
  name: string;
  lastCheckup: string;
  upcomingAppointments: Appointment[];
  prescriptions: Prescription[];
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<UserData>({
    name: '',
    lastCheckup: '',
    upcomingAppointments: [],
    prescriptions: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setUserData({
          name: 'Alex Johnson',
          lastCheckup: '2023-10-15',
          upcomingAppointments: [
            { id: 1, date: '2023-12-10', doctor: 'Dr. Smith', specialty: 'Cardiology' }
          ],
          prescriptions: [
            { id: 1, name: 'Metformin', dosage: '500mg', refills: 2 }
          ]
        })
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
    <div style={{
      padding: '12px',
      margin: '8px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      borderLeft: '4px solid #3b82f6'
    }}>
      <p style={{ fontWeight: '600', marginBottom: '4px' }}>{appointment.doctor}</p>
      <p style={{ fontSize: '14px', color: '#64748b' }}>{appointment.specialty}</p>
      <p style={{ fontSize: '14px', color: '#64748b' }}>
        {new Date(appointment.date).toLocaleDateString()}
      </p>
    </div>
  )

  const PrescriptionItem = ({ prescription }: { prescription: Prescription }) => (
    <div style={{
      padding: '12px',
      margin: '8px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ fontWeight: '600', marginBottom: '4px' }}>{prescription.name}</p>
      <p style={{ fontSize: '14px', color: '#64748b' }}>
        {prescription.dosage} • {prescription.refills} refills left
      </p>
    </div>
  )

  const LoadingSkeleton = () => (
    <div style={{ padding: '24px' }}>
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{
          height: '120px',
          backgroundColor: '#e2e8f0',
          borderRadius: '8px',
          marginBottom: '16px',
          animation: 'pulse 2s infinite'
        }}></div>
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1 }
          50% { opacity: 0.5 }
        }
      `}</style>
    </div>
  )

  if (loading) {
    return (
      <main style={{
        minHeight: '100vh',
        padding: '24px',
        backgroundColor: '#f8fafc'
      }}>
        <LoadingSkeleton />
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh',
      padding: '24px',
      backgroundColor: '#f8fafc'
    }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1e40af',
          marginBottom: '8px'
        }}>
          Welcome back, <span style={{ color: '#1e293b' }}>{userData.name}</span>
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#64748b'
        }}>
          Last checkup: {new Date(userData.lastCheckup).toLocaleDateString()}
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        <section style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#1e293b'
          }}>Upcoming Appointments</h2>
          
          {userData.upcomingAppointments.length > 0 ? (
            userData.upcomingAppointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <p style={{ color: '#64748b', fontStyle: 'italic' }}>No upcoming appointments</p>
          )}
          
          <button style={{
            marginTop: '16px',
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%'
          }}>
            Book New Appointment
          </button>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#1e293b'
          }}>Health Stats</h2>
          
          <div style={{
            height: '200px',
            backgroundColor: '#f1f5f9',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b'
          }}>
            Health Chart Visualization
          </div>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#1e293b'
          }}>Current Prescriptions</h2>
          
          {userData.prescriptions.length > 0 ? (
            userData.prescriptions.map(prescription => (
              <PrescriptionItem key={prescription.id} prescription={prescription} />
            ))
          ) : (
            <p style={{ color: '#64748b', fontStyle: 'italic' }}>No active prescriptions</p>
          )}
          
          <button style={{
            marginTop: '16px',
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%'
          }}>
            Request Refill
          </button>
        </section>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        <button style={{
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '24px' }}>📅</span>
          Schedule Visit
        </button>
        
        <button style={{
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '24px' }}>💊</span>
          Medication History
        </button>
        
        <button style={{
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '24px' }}>🏥</span>
          Find Hospitals
        </button>
      </div>
    </main>
  )
}
    
